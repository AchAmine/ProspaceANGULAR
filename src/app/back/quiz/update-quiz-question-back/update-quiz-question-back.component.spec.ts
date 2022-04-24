import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuizQuestionBackComponent } from './update-quiz-question-back.component';

describe('UpdateQuizQuestionBackComponent', () => {
  let component: UpdateQuizQuestionBackComponent;
  let fixture: ComponentFixture<UpdateQuizQuestionBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuizQuestionBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuizQuestionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
