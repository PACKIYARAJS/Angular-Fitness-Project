import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-member-ship',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './member-ship.component.html',
  styleUrl: './member-ship.component.scss'
})
export class MemberShipComponent implements OnInit{

  joinnow : FormGroup;
  isSubmitted : boolean = false;

  constructor(private router : Router, private session: SessionService, private api : ApiService)
  {
    this.joinnow = new FormGroup(
      {
        PayAmount : new FormControl('', Validators.required)
      }
    );
  }
  

  ngOnInit(): void {
    
    this.session.validateUser();

    this.getData();

  }

  getdata : any ;

  userID = sessionStorage.getItem('UserId'); 

  getData()
  {
    this.api.getData(apiUrls.UserApi+`?id=${this.userID}`).subscribe(

      (response : any)=>{
        this.getdata = response;
      },

      err=>{console.log(err);}

    );
  }

  offers = [
    {
      month : 3, Price : 2999
    },
    {
      month : 6, Price : 4999
    },
    {
      month : 9, Price : 6999
    },
    {
      month : 12, Price : 9999
    },
  ]

  Subscription()
  {
    this.isSubmitted = true;
    
    if(this.joinnow.status == "VALID")
    {
        let request =
        {
            UserType : `Subscriber ${this.joinnow.get('PayAmount')?.value}`
        }

        this.api.patchData(apiUrls.UserApi, request, this.userID).subscribe
        (
          ()=>{
            alert('You are now Subscriber!');
          },
          err => {console.log(err)}

        );
      }
    }
}
