import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultQuizFrontComponent } from './result-quiz-front.component';

describe('ResultQuizFrontComponent', () => {
  let component: ResultQuizFrontComponent;
  let fixture: ComponentFixture<ResultQuizFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultQuizFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultQuizFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
