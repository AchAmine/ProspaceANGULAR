import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdetailsFrontComponent } from './offerdetails-front.component';

describe('OfferdetailsFrontComponent', () => {
  let component: OfferdetailsFrontComponent;
  let fixture: ComponentFixture<OfferdetailsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferdetailsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdetailsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
