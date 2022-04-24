import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequizBackComponent } from './updatequiz-back.component';

describe('UpdatequizBackComponent', () => {
  let component: UpdatequizBackComponent;
  let fixture: ComponentFixture<UpdatequizBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatequizBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequizBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
