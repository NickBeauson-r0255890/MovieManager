import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WatchlistCenterComponent } from './watchlist-center/watchlist-center.component';
import { WatchlistHomeComponent } from './watchlist-home/watchlist-home.component';
import { WatchlistListComponent } from './watchlist-list/watchlist-list.component';
import { WatchlistDetailComponent } from './watchlist-detail/watchlist-detail.component';

const routes: Routes = [
  {path: 'watchlist', component: WatchlistCenterComponent, children: [
    {path: '', component: WatchlistListComponent, children: [
      {path: ':id', component: WatchlistDetailComponent },
      {path: '', component: WatchlistHomeComponent}
    ]}
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlistRoutingModule { }
