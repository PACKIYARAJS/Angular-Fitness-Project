import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-view-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-account.component.html',
  styleUrl: './view-account.component.scss'
})
export class ViewAccountComponent implements OnInit {

  constructor(private api : ApiService){}

  ngOnInit(): void {
    this.getDataValue();
  }

  accountValue : any;

  getDataValue(){

    this.api.getData().subscribe(

      (response:any)=>{

        this.accountValue = response;

      },

      (err)=>{console.log(err)}

    );

  }

}
