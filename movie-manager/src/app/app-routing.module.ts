import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contact', component: ContactComponent, outlet: 'popup'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
            routes,
            { enableTracing: false }  //true for debugging
        )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
