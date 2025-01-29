import { Routes } from '@angular/router';
import { CreateAccountComponent } from './HomePage/create-account/create-account.component';
import { LoginComponent } from './HomePage/login/login.component';
import { LogoutComponent } from './HomePage/logout/logout.component';
import { MemberShipComponent } from './HomePage/member-ship/member-ship.component';
import { ViewAccountComponent } from './HomePage/view-account/view-account.component';

export const routes: Routes = [
    {path : 'create-account', component : CreateAccountComponent},
    {path : 'login', component : LoginComponent},
    {path : 'logout', component : LogoutComponent},
    {path : 'member-ship', component : MemberShipComponent},
    {path : 'view-account', component : ViewAccountComponent}
];
