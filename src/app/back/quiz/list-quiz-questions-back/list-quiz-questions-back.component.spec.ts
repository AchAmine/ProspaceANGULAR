import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizQuestionsBackComponent } from './list-quiz-questions-back.component';

describe('ListQuizQuestionsBackComponent', () => {
  let component: ListQuizQuestionsBackComponent;
  let fixture: ComponentFixture<ListQuizQuestionsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuizQuestionsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuizQuestionsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
