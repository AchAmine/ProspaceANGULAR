import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquizBackComponent } from './listquiz-back.component';

describe('ListquizBackComponent', () => {
  let component: ListquizBackComponent;
  let fixture: ComponentFixture<ListquizBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListquizBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquizBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
