import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

    this.api.getData().subscribe(
      (res : any)=>{
        this.account = res;
      },
      err =>{
        console.log(err);
      }

    )

  }

}
