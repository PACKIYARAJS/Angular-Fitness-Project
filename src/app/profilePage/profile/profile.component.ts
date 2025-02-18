import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  UserName:string = 'qwe';

  constructor(private session: SessionService){}

  ngOnInit(): void {
    
    this.logout();

  } 

  logout()
  {
    this.session.LogoutSession();
  }
}
