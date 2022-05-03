import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSectionBackComponent } from './update-section-back.component';

describe('UpdateSectionBackComponent', () => {
  let component: UpdateSectionBackComponent;
  let fixture: ComponentFixture<UpdateSectionBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSectionBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSectionBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
