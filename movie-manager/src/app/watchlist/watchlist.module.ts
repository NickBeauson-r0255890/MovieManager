import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchlistRoutingModule } from './watchlist-routing.module';
import { WatchlistCenterComponent } from './watchlist-center/watchlist-center.component';
import { WatchlistHomeComponent } from './watchlist-home/watchlist-home.component';
import { WatchlistListComponent } from './watchlist-list/watchlist-list.component';
import { WatchlistDetailComponent } from './watchlist-detail/watchlist-detail.component';


@NgModule({
  declarations: [
    WatchlistCenterComponent,
    WatchlistHomeComponent,
    WatchlistListComponent,
    WatchlistDetailComponent
  ],
  imports: [
    CommonModule,
    WatchlistRoutingModule
  ]
})
export class WatchlistModule { }
