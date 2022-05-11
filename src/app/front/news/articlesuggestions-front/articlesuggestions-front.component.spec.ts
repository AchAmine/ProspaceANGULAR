import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesuggestionsFrontComponent } from './articlesuggestions-front.component';

describe('ArticlesuggestionsFrontComponent', () => {
  let component: ArticlesuggestionsFrontComponent;
  let fixture: ComponentFixture<ArticlesuggestionsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesuggestionsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesuggestionsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
