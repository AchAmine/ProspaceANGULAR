import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartQuizFrontComponent } from './start-quiz-front.component';

describe('StartQuizFrontComponent', () => {
  let component: StartQuizFrontComponent;
  let fixture: ComponentFixture<StartQuizFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartQuizFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartQuizFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
