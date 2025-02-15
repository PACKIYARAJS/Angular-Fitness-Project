import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router : Router){}

  goToReg()
  {
    this.router.navigate(['/create-account']);
  }

  redirect()
  {
    alert("Login successfully...");
    this.router.navigate(['/home']);
  }

}
