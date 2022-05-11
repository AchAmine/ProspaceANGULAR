import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateoffersBackComponent } from './updateoffers-back.component';

describe('UpdateoffersBackComponent', () => {
  let component: UpdateoffersBackComponent;
  let fixture: ComponentFixture<UpdateoffersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateoffersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateoffersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
