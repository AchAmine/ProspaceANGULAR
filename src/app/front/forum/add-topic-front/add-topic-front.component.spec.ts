import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopicFrontComponent } from './add-topic-front.component';

describe('AddTopicFrontComponent', () => {
  let component: AddTopicFrontComponent;
  let fixture: ComponentFixture<AddTopicFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTopicFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTopicFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
