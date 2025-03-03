import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, NgbRatingModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent {

  constructor(rating : NgbRatingConfig) 
  {
      rating.max = 5;

      rating.readonly = true;
  }

}
