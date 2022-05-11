import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomplaintBackComponent } from './addcomplaint-back.component';

describe('AddcomplaintBackComponent', () => {
  let component: AddcomplaintBackComponent;
  let fixture: ComponentFixture<AddcomplaintBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcomplaintBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomplaintBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
