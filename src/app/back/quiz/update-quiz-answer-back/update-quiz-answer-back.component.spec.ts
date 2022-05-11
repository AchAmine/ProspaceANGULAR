import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuizAnswerBackComponent } from './update-quiz-answer-back.component';

describe('UpdateQuizAnswerBackComponent', () => {
  let component: UpdateQuizAnswerBackComponent;
  let fixture: ComponentFixture<UpdateQuizAnswerBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuizAnswerBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuizAnswerBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
