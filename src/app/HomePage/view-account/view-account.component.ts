import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-view-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.scss'
})
export class ViewAccountComponent implements OnInit {

  constructor(private api : ApiService, private session:SessionService){}

  ngOnInit(): void {
    this.session.validateUser();
    this.getDataValue();
  }

  accountValue : any;

  getDataValue(){

    this.api.getData(apiUrls.UserApi).subscribe(

      (response:any)=>{

        this.accountValue = response;

      },

      (err)=>{console.log(err)}

    );

  }

}
