import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizanswerBackComponent } from './addquizanswer-back.component';

describe('AddquizanswerBackComponent', () => {
  let component: AddquizanswerBackComponent;
  let fixture: ComponentFixture<AddquizanswerBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquizanswerBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquizanswerBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
