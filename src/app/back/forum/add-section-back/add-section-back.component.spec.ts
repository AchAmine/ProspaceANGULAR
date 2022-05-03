import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionBackComponent } from './add-section-back.component';

describe('AddSectionBackComponent', () => {
  let component: AddSectionBackComponent;
  let fixture: ComponentFixture<AddSectionBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
