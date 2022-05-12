import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersNavComponent } from './offers-nav.component';

describe('OffersNavComponent', () => {
  let component: OffersNavComponent;
  let fixture: ComponentFixture<OffersNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
