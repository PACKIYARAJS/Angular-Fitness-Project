import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet, Router } from '@angular/router';
import { CreateAccountComponent } from './HomePage/create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './HomePage/login/login.component';
import { SessionService } from './Services/session.service';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CreateAccountComponent, FormsModule, RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title:String = 'Fitness';

  isSessionAvailable:boolean = false;

  //router: Router = new Router;  // Difficult way

  constructor (private router : Router , public session : SessionService){} //Dependency Injection

  ngOnInit(): void {
    //this.isSessionAvailable = this.session.isSessionAvailable();
  }

  goToReg()
  {
    this.router.navigate(['/create-account']);
  }

  goTOLogin()
  {
    this.router.navigate(['/login']);
  }

  goTOLogout()
  {
    this.router.navigate(['/logout']);
  }


  goTOMemberShip()
  {
    this.router.navigate(['/member-ship']);
  }

  goToView()
  {
    this.router.navigate(['/view-account']);
  }

  goToAdmin()
  {
    this.router.navigate(['admin-account']);
  }

}
