import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquizBackComponent } from './addquiz-back.component';

describe('AddquizBackComponent', () => {
  let component: AddquizBackComponent;
  let fixture: ComponentFixture<AddquizBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquizBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquizBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
