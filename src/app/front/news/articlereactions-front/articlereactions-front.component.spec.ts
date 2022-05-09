import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlereactionsFrontComponent } from './articlereactions-front.component';

describe('ArticlereactionsFrontComponent', () => {
  let component: ArticlereactionsFrontComponent;
  let fixture: ComponentFixture<ArticlereactionsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlereactionsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlereactionsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
