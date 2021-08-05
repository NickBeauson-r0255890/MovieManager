import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistCenterComponent } from './watchlist-center.component';

describe('WatchlistCenterComponent', () => {
  let component: WatchlistCenterComponent;
  let fixture: ComponentFixture<WatchlistCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
