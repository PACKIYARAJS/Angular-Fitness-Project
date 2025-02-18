import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent implements OnInit{

  constructor(private session: SessionService){}

  ngOnInit(): void {
    this.session.validateUser();
  }

}
