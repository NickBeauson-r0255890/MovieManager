import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageMoviesComponent } from './manage-movies/manage-movies.component';

import { AuthGuard }from '../auth/auth.guard';

const routes: Routes = [
  {path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', children: [
          {path: 'movies', component: ManageMoviesComponent},
          {path: '', component: AdminDashboardComponent}
      ]}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
