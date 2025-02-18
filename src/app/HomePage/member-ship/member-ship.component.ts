import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-member-ship',
  standalone: true,
  imports: [],
  templateUrl: './member-ship.component.html',
  styleUrl: './member-ship.component.scss'
})
export class MemberShipComponent implements OnInit{

  constructor(private router : Router, private session: SessionService){}

  ngOnInit(): void {
    
    this.session.validateUser();

  }

}
