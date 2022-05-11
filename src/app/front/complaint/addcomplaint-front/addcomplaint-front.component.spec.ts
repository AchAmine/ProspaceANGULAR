import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomplaintFrontComponent } from './addcomplaint-front.component';

describe('AddcomplaintFrontComponent', () => {
  let component: AddcomplaintFrontComponent;
  let fixture: ComponentFixture<AddcomplaintFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcomplaintFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomplaintFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
