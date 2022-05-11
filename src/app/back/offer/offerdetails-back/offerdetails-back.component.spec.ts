import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailsBackComponent } from './offerdetails-back.component';

describe('OfferdetailsBackComponent', () => {
  let component: OfferdetailsBackComponent;
  let fixture: ComponentFixture<OfferdetailsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
