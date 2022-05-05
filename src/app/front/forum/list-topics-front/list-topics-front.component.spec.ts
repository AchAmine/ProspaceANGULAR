import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopicsFrontComponent } from './list-topics-front.component';

describe('ListTopicsFrontComponent', () => {
  let component: ListTopicsFrontComponent;
  let fixture: ComponentFixture<ListTopicsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTopicsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopicsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
