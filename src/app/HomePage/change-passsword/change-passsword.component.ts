import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-change-passsword',
  standalone: true,
  imports: [NgbAlertModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './change-passsword.component.html',
  styleUrl: './change-passsword.component.scss'
})
export class ChangePassswordComponent implements OnInit{

  changepass : FormGroup;

  submitted : boolean = false;

  errMsg :string ='';

  otp : number =Math.floor(1000+Math.random()*9000);;

  ngOnInit(): void {
    alert("OTP : "+this.otp);
  }

  constructor(private api:ApiService, private router : Router)
  {
    this.changepass = new FormGroup(
      {
        OTP : new FormControl('',[Validators.minLength(4) , Validators.required]),

        Password : new FormControl('', [Validators.minLength(8) , Validators.required]),

        ConfirmPass : new FormControl('',[Validators.minLength(8) , Validators.required])
      }
    );
  }

  UserId = sessionStorage.getItem('UserId');

  change()
  {
    this.submitted = true;

    this.errMsg = '';

    if(this.validPassword() && this.changepass.status == 'VALID')
    {
      if(this.otp == this.changepass.get('OTP')?.value)
      {
        this.changePassword();
      }
      else{
        this.errMsg="Invalid OTP number...";
      }
    }

  }

  changePassword()
  {
    let request =
    {
      Password : this.changepass.get('Password')?.value,
    }

    this.api.patchData(apiUrls.UserApi, request, this.UserId).subscribe(

      ()=>{
        alert('Password Changed');

        sessionStorage.removeItem('UserId');

        this.router.navigate(['login']);
      },
      err=>console.log(err)

    );
  } 

  validPassword()
  {
    if(this.changepass.get('Password')?.value != this.changepass.get('ConfirmPass')?.value)
    {
      this.errMsg= 'New Password and Confirm Password Doesnt match...';
      
      return false;
    }
    return true;
  }

}
