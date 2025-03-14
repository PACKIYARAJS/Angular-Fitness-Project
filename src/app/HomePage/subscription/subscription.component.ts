import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiUrls } from '../../Constants/globalConstants';
import { ApiService } from '../../Services/api.service';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})

export class SubscriptionComponent implements OnInit{

  ngOnInit(): void {
    this.AlreadySubscribed();
  }

  constructor(private router : Router , private session : SessionService, private api : ApiService){}

  contents = [
    {
      price : 2999,
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDWPZbOqjxORTnJwzdvdDrCSPQMjGi4kdbntFsof_bBryFSBHiz0x2nPwrvyh_zoLrMc&usqp=CAU',
      content : `Service valid for <mark> 3 Months</mark> <br> 

      <i><b>Opening Hours</b></i> : <br> 
      
      Monday to Sunday : 5AM TO 11PM <br> 
      
      <i><b>Amenties</i></b>: <br> 
      
      Cardio | Strength Training | Certified Traners | Group Excercise Studio | B C A | Free Orientation Session | Workout Shedule | Biometric Access | Certified personal Trainers | HIIT | Nutritionist | Freezing Option | Steam and Shower | Valet Parking | Music | Wifi | CCTV`
    },
    {
      price : 4999,
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1vXCI541IDbEjGsgw4W6xeDS0UBAC3v6rQ&s',
      content : `Service valid for <mark> 6 Months</mark> <br> 

      <i><b>Opening Hours</b></i> : <br> 
      
      Monday to Sunday : 5AM TO 11PM <br> 
      
      <i><b>Amenties</i></b>: <br> 
      
      Cardio | Strength Training | Certified Traners | Group Excercise Studio | B C A | Free Orientation Session | Workout Shedule | Biometric Access | Certified personal Trainers | HIIT | Nutritionist | Freezing Option | Steam and Shower | Valet Parking | Music | Wifi | CCTV`
    },
    {
      price : 6999,
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlFgbWEZJwMtAmPBP9XLV_m4OfQJAsvx4zw&s',
      content : `Service valid for <mark> 9 Months </mark> <br> 

      <i><b>Opening Hours</b></i> : <br> 
      
      Monday to Sunday : 5AM TO 11PM <br> 
      
      <i><b>Amenties</i></b>: <br> 
      
      Cardio | Strength Training | Certified Traners | Group Excercise Studio | B C A | Free Orientation Session | Workout Shedule | Biometric Access | Certified personal Trainers | HIIT | Nutritionist | Freezing Option | Steam and Shower | Valet Parking | Music | Wifi | CCTV`
    },
    {
      price : 9999,
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYTeCfUAaC_uAxGfl1UNDsxFZ3uTPvLtGDw&s',
      content : `Service valid for <mark> 12 Months</mark> <br> 

      <i><b>Opening Hours</b></i> : <br> 
      
      Monday to Sunday : 5AM TO 11PM <br> 
      
      <i><b>Amenties</i></b>: <br>  
      
      Cardio | Strength Training | Certified Traners | Group Excercise Studio | B C A | Free Orientation Session | Workout Shedule | Biometric Access | Certified personal Trainers | HIIT | Nutritionist | Freezing Option | Steam and Shower | Valet Parking | Music | Wifi | CCTV`
    },
  ];

  nav()
  {
    this.router.navigate(['member-ship']);
  }

  button : string = 'Subscription';

  subscriber : boolean = false;

  AlreadySubscribed()
  {
    const id = sessionStorage.getItem('UserId');

    this.api.getData(apiUrls.UserApi+id).subscribe
    (
      (response:any)=>{
        if(response && response.UserType !='Normal')
        {
            this.button = 'Subscribed';

            this.subscriber = true;
        }
      },
      err =>{console.log(err)}
    );
  }

}