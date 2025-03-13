import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject, TemplateRef, model } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-member-ship',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './member-ship.component.html',
  styleUrl: './member-ship.component.scss',
  providers : [CurrencyPipe]
})
export class MemberShipComponent implements OnInit{

  joinnow : FormGroup;

  isSubmitted : boolean = false;

  errMsg :any ;

  value : any;

  constructor(private router : Router, private session: SessionService, private api : ApiService, private currency : CurrencyPipe)
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

    this.Alreadysubscriber();

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
  ];

    private modalService = inject(NgbModal);

    confirmPayment : any ;
  
  openBackDropCustomClass(content: TemplateRef<any>) 
  {
      this.isSubmitted = true;

      if(this.joinnow.status == "VALID")
      {
        this.value = this.joinnow.get('PayAmount')?.value;

        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
      }
  }

  Subscription()
  {
    const confirmAmount = this.currency.transform(this.confirmPayment, 'INR')

    console.log(this.value, confirmAmount);

    if(this.value == confirmAmount)
    {
      let request =
      {
        UserType : `Subscriber ${this.joinnow.get('PayAmount')?.value}`
      }

      this.api.patchData(apiUrls.UserApi, request, this.userID).subscribe
      (
        ()=>{
          alert('You are now Subscriber!\nOur team contact you soon...');
          
          this.modalService.dismissAll();

          this.router.navigate(['home']);
        },
        err => {console.log(err)}
      );
    }
      else
      {
        alert("kindly enter the correct amount");
      }
  }

  subscriber : boolean = false;

  button : string = 'Pay Amount';

  Alreadysubscriber()
  {
    this.api.getData(apiUrls.UserApi+this.userID).subscribe
    (
      (response : any)=>
      {
        if(response && response.UserType != 'Normal')
        {
          this.subscriber = true;

          this.button = 'Subscribed';
        }
      },
      err => {console.log(err);}
    );
  }

}
