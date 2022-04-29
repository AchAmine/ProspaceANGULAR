import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendofferFrontComponent } from './sendoffer-front.component';

describe('SendofferFrontComponent', () => {
  let component: SendofferFrontComponent;
  let fixture: ComponentFixture<SendofferFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendofferFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendofferFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
