import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizpageFrontComponent } from './quizpage-front.component';

describe('QuizpageFrontComponent', () => {
  let component: QuizpageFrontComponent;
  let fixture: ComponentFixture<QuizpageFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizpageFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizpageFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
