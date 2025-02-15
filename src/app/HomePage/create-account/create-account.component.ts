import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { create } from 'domain';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet],
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

    constructor(private api:ApiService,private router:Router){}

    CreateData(){

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
      this.api.create(request).subscribe(
        ()=>{
          alert('Registration successfully....')
          this.router.navigate(['/login']);
        },
        err=>{console.log(err)}
      );
    }
}
