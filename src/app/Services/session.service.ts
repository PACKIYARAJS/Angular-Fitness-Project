import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router:Router) { }

  LogoutSession()
  {
    sessionStorage.removeItem('UserId');
    
    setTimeout(()=>{
    
      this.router.navigate(['/login']);
    
    }, 1000);
  }

  validateUser()
  {
    let User = sessionStorage.getItem('UserId') || '';

    if(User =='')
    {
      this.router.navigate(['login']);
    }
  }
  
}
