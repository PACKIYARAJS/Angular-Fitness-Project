import { Component } from '@angular/core';
import { Router ,RouterModule, RouterOutlet } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { CreateAccountComponent } from '../create-account/create-account.component'
import { MemberShipComponent } from '../member-ship/member-ship.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreateAccountComponent, RouterModule, RouterOutlet, MemberShipComponent, AboutusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router:Router){}
  goToJoin()
  {
    this.router.navigate(['/member-ship']);
  }

}
