import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizAnswerBackComponent } from './list-quiz-answer-back.component';

describe('ListQuizAnswerBackComponent', () => {
  let component: ListQuizAnswerBackComponent;
  let fixture: ComponentFixture<ListQuizAnswerBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuizAnswerBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuizAnswerBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
