import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistHomeComponent } from './watchlist-home.component';

describe('WatchlistHomeComponent', () => {
  let component: WatchlistHomeComponent;
  let fixture: ComponentFixture<WatchlistHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
