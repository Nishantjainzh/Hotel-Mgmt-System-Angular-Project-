import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RoomBookingRequestComponent } from './room-booking-request/room-booking-request.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'auth',component:AuthenticationComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'room-booking-request',component:RoomBookingRequestComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
