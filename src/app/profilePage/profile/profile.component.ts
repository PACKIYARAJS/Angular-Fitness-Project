import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { apiUrls } from '../../Constants/globalConstants';
import { LoginComponent } from '../../HomePage/login/login.component';
import { ApiService } from '../../Services/api.service';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LoginComponent, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  record : any ;

  show:boolean=false;

  constructor(private session: SessionService, private api : ApiService){}

  ngOnInit(): void {
    
    this.session.validateUser();

    this.getProfile();

  } 

  UserId = sessionStorage.getItem('UserId'); 

  getProfile()
  {
    this.api.getData(apiUrls.UserApi+"/"+this.UserId).subscribe
    (
      (responseData)=>{

        this.record = Array.isArray(responseData) ? responseData : [responseData];

        console.log(this.record);

      },
      err=>{console.log(err)}
    );

  }

  UpdateData(account:any){

    console.log(account)

    this.api.update(apiUrls.UserApi,account,this.UserId).subscribe
    (
      ()=>{
        alert('updated successfully....')
        this.getProfile();
      },
      err=>{console.log(err)}
    )

  }

  

  logout()
  {
    this.session.LogoutSession();
  }

}
