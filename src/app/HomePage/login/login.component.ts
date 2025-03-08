import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgbAlertModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  LoginForm : FormGroup;

  isSubmitted : boolean = false;

  errMsg : string ='';

  ngOnInit(): void {

    this.alreadylogin();
  
  }

  constructor(private router : Router, private api: ApiService, private session : SessionService){

    this.LoginForm = new FormGroup(
      {
        UserName : new FormControl('',Validators.required),
        Password : new FormControl('', [Validators.minLength(8),Validators.required])
      }
    );

  }

  goToReg()
  {
    this.router.navigate(['/create-account']);
  }

  checkLogin()
  {
    console.log(this.LoginForm);

    this.errMsg = '';

    this.isSubmitted = true;

    if(this.LoginForm.status=='VALID')
    {
      let filter = "?UserName=" + this.LoginForm.get('UserName')?.value + "&Password=" + this.LoginForm.get('Password')?.value;

      this.api.getData(apiUrls.UserApi + filter).subscribe(
        (responseData : any)=>{
          if(responseData.length > 0){
            alert("Login Successfull...");
            sessionStorage.setItem('User',this.LoginForm.get('UserName')?.value );
            sessionStorage.setItem('UserId', responseData[0].id);
            this.router.navigate(['home']);
          }else{
            this.errMsg = 'Invalid Username or password.';
          }
        },
        err => { 
          console.log(err);
          this.errMsg = 'An error occurred. Kindly try again later.';
        }
      );
    }
  }

  alreadylogin()
  {
    if(sessionStorage.getItem('UserId'))
    {
      let ok = confirm('You have already logined...\nIf you want to logout.\nClick ok button');

      if(ok)
      {
        this.router.navigate(['profile']);
      }
      else{
        this.router.navigate(['home']);
      }

     
    }
  }
}
