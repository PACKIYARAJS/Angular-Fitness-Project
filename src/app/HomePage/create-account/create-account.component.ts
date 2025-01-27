import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
    FirstName = '';
    LastName = '';
    Age=0;
    Gender = '';
    Email = '';
    ContactNumber = 0;

    Create(){

      let request={
        FirstName : this.FirstName,
        LastName : this.LastName,
        Age : this.Age,
        Gender : this.Gender, 
        Email : this.Email,
        ContactNumber : this.ContactNumber,
      }
      console.log(request);
    }
}
