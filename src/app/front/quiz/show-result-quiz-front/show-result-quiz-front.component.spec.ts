import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResultQuizFrontComponent } from './show-result-quiz-front.component';

describe('ShowResultQuizFrontComponent', () => {
  let component: ShowResultQuizFrontComponent;
  let fixture: ComponentFixture<ShowResultQuizFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowResultQuizFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResultQuizFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
