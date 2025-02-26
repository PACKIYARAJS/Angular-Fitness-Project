import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule, NgbAlertModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

    registerForm : FormGroup;
    isSubmitted : boolean = false;
    isRegisterSuccess : boolean = false; 

    constructor(private api:ApiService,private router:Router)
    {
      this.registerForm = new FormGroup
      (
        {
          FirstName: new FormControl('', Validators.required),
          LastName: new FormControl('', Validators.required),
          UserName: new FormControl('', Validators.required),
          Age: new FormControl('', Validators.required),
          Gender: new FormControl('', Validators.required),
          Email: new FormControl('', [Validators.email, Validators.required]),
          ContactNumber: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required]),
          Password: new FormControl('', [Validators.minLength(8), Validators.required]),
          ConfirmPassword: new FormControl('', [Validators.minLength(8), Validators.required])
        }
      );
    }

    validPassword()
    {
      if(this.registerForm.get('Password')?.value != this.registerForm.get('ConfirmPassword')?.value)
      {
        alert('Password and Confirm Password Doesnt match...');
        return false;
      }
      return true;
    }

    CreateData(){

      this.isSubmitted = true;
      console.log("Func Called");
      console.log(this.registerForm);

      if(this.validPassword() && this.registerForm.status=='VALID')
      {
        let request={
          FirstName : this.registerForm.get('FirstName')?.value,
          LastName : this.registerForm.get('LastName')?.value,
          UserName : this.registerForm.get('UserName')?.value,
          Age : this.registerForm.get('Age')?.value,
          Gender : this.registerForm.get('Gender')?.value, 
          Email : this.registerForm.get('Email')?.value,
          ContactNumber : this.registerForm.get('ContactNumber')?.value,
          Password : this.registerForm.get('Password')?.value,
          UserType:'Customer'
        }
        this.api.create(apiUrls.UserApi,request).subscribe(
          ()=>{
            alert('Registration successfully....')
            this.router.navigate(['/login']);
          },
          err=>{console.log(err)}
        );
      }
    }
}
