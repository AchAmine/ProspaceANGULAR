import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFrontComponent } from './comments-front.component';

describe('CommentsFrontComponent', () => {
  let component: CommentsFrontComponent;
  let fixture: ComponentFixture<CommentsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
