import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, RouterModule, NgbAlertModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
 
  Forgetpass : FormGroup;

  submitted : boolean = false;

  errMsg : string = '';

  constructor(private api : ApiService, private router : Router)
  {
    this.Forgetpass = new FormGroup(
      {
        Email : new FormControl('', [Validators.email , Validators.required]),
      }
    );
  }

  check()
  {
    this.submitted = true;

    this.errMsg = '';

    if(this.Forgetpass.status=='VALID')
    {
      let filter = "?Email=" + this.Forgetpass.get('Email')?.value;

      this.api.getData(apiUrls.UserApi+filter).subscribe(
        (response: any)=>{
          if(response.length>0)
          {
            sessionStorage.setItem('UserId', response[0].id)

            this.router.navigate(['change-passsword']);
          }
          else{
            this.errMsg = 'Invalid email address...'
          }
        },
        err=>{console.log(err)}
      );
    }
  }
}
