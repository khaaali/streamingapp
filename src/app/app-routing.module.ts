import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShowRightNavComponent } from './show-right-nav/show-right-nav.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { SeatsNavComponent } from './seats-nav/seats-nav.component';


const routes: Routes = [
  { path: 'ShowRightNav', component: ShowRightNavComponent },
  { path: 'HomeNav', component: HomeNavComponent },
  { path: 'SeatsNav', component: SeatsNavComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
