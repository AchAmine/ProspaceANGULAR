import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticledetailsBackComponent } from './articledetails-back.component';

describe('ArticledetailsBackComponent', () => {
  let component: ArticledetailsBackComponent;
  let fixture: ComponentFixture<ArticledetailsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticledetailsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticledetailsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
