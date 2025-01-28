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
    FirstName:String = '';
    LastName:String = '';
    UserName:String = '';
    Age:Number = 0;
    Gender = '';
    Email = '';
    ContactNumber:Number = 0;
    Password:String = '';

    Create(){

      let request={
        FirstName : this.FirstName,
        LastName : this.LastName,
        UserName : this.UserName,
        Age : this.Age,
        Gender : this.Gender, 
        Email : this.Email,
        ContactNumber : this.ContactNumber,
        Password : this.Password
      }
      console.log(request);
    }
}
