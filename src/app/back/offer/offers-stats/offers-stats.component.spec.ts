import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersStatsComponent } from './offers-stats.component';

describe('OffersStatsComponent', () => {
  let component: OffersStatsComponent;
  let fixture: ComponentFixture<OffersStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
