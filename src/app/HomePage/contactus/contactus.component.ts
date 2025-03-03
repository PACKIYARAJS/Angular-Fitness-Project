import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor()
  {
    this.ContactUS = new FormGroup(
      {
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

      email : this.ContactUS.get('email')?.value,

      phoneNumber : this.ContactUS.get('phoneNumber')?.value,

      Massage : this.ContactUS.get('text')?.value
    }
    alert('Message sended successfully....');

  }
}

}