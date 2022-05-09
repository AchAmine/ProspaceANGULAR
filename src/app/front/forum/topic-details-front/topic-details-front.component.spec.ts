import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDetailsFrontComponent } from './topic-details-front.component';

describe('TopicDetailsFrontComponent', () => {
  let component: TopicDetailsFrontComponent;
  let fixture: ComponentFixture<TopicDetailsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicDetailsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDetailsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
