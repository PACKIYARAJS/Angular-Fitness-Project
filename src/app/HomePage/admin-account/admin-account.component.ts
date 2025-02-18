import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-admin-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-account.component.html',
  styleUrl: './admin-account.component.scss'
})
export class AdminAccountComponent implements OnInit{

  constructor(private api: ApiService){}

  showData: boolean = false;

  account : any ;

  ngOnInit(): void {
    this.getDataValue();
  }

  getDataValue(){

    this.api.getData(apiUrls.UserApi).subscribe(
      (res : any)=>{
        this.account = res;
      },
      err =>{
        console.log(err);
      }
    )
  }

  deleteData(data:any)
  {
    this.api.delete(apiUrls.UserApi,data.id).subscribe(
      ()=>{
        this.getDataValue();
      },
      err=>{console.log(err)}
    );
  }

}
