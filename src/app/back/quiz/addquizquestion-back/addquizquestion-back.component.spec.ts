import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizquestionBackComponent } from './addquizquestion-back.component';

describe('AddquizquestionBackComponent', () => {
  let component: AddquizquestionBackComponent;
  let fixture: ComponentFixture<AddquizquestionBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquizquestionBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquizquestionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
