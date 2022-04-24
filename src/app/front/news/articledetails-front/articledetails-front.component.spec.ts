import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticledetailsFrontComponent } from './articledetails-front.component';

describe('ArticledetailsFrontComponent', () => {
  let component: ArticledetailsFrontComponent;
  let fixture: ComponentFixture<ArticledetailsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticledetailsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticledetailsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
