import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer/footer.component';
import { AboutusComponent } from './HomePage/aboutus/aboutus.component';
import { AdminAccountComponent } from './HomePage/admin-account/admin-account.component';
import { ChangePassswordComponent } from './HomePage/change-passsword/change-passsword.component';
import { ContactusComponent } from './HomePage/contactus/contactus.component';
import { CreateAccountComponent } from './HomePage/create-account/create-account.component';
import { DietComponent } from './HomePage/diet/diet.component';
import { ForgetPasswordComponent } from './HomePage/forget-password/forget-password.component';
import { HomeComponent } from './HomePage/home/home.component';
import { LoginComponent } from './HomePage/login/login.component';
import { MemberShipComponent } from './HomePage/member-ship/member-ship.component';
import { SubscriptionComponent } from './HomePage/subscription/subscription.component';
import { TrainingComponent } from './HomePage/training/training.component';
import { ViewAccountComponent } from './HomePage/view-account/view-account.component';
import { ProfileComponent } from './profilePage/profile/profile.component';

export const routes: Routes = [
    {path :'', redirectTo:'home', pathMatch:'full'},
    {path : 'home', component:HomeComponent},
    {path : 'create-account', component : CreateAccountComponent},
    {path : 'login', component : LoginComponent},   
    {path : 'member-ship', component : MemberShipComponent},
    {path : 'view-account', component : ViewAccountComponent},
    {path : 'admin-account', component : AdminAccountComponent},
    {path : 'aboutus', component : AboutusComponent},
    {path : 'contactus', component : ContactusComponent},
    {path : 'training', component : TrainingComponent},
    {path : 'diet', component : DietComponent},
    {path : 'profile', component : ProfileComponent},
    {path : 'footer', component : FooterComponent},
    {path : 'forget-password', component : ForgetPasswordComponent},
    {path : 'change-passsword', component : ChangePassswordComponent},
    {path : 'subscription', component : SubscriptionComponent}
];
