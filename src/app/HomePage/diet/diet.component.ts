import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.scss'
})
export class DietComponent implements OnInit{

  constructor(private router: Router , private session: SessionService){}

  ngOnInit(): void {
    this.session.validateUser();
    
  }

}
