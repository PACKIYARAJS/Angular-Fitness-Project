import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getEnvironmentData } from 'worker_threads';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {

  image = 'assets/images4.jpg';

  ContactUS : FormGroup;

  isSubmitted : boolean = false;

  constructor(private router : Router, private api: ApiService)
  {
    this.ContactUS = new FormGroup(
      {
        Name : new FormControl('', [Validators.required]),

        email : new FormControl('', [Validators.email, Validators.required]),

        phoneNumber : new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required]),

        text : new FormControl('', Validators.required)
      }
    );
  }

  GoToSubmit()
{
  this.isSubmitted = true;

  console.log(this.ContactUS);

  if(this.ContactUS.status == 'VALID')
  {
    let request = {

      Name : this.ContactUS.get('Name')?.value,

      Email : this.ContactUS.get('email')?.value,

      PhoneNumber : this.ContactUS.get('phoneNumber')?.value,

      Msg : this.ContactUS.get('text')?.value
    }

    this.api.create(apiUrls.MsgApi,request).subscribe(

      ()=>{
        alert('Message sended successfully\nOur team will contact you soon....');
      },
      err =>{console.log(err)}

    );   
  }
}

  

}