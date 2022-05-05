import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSectionsFrontComponent } from './list-sections-front.component';

describe('ListSectionsFrontComponent', () => {
  let component: ListSectionsFrontComponent;
  let fixture: ComponentFixture<ListSectionsFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSectionsFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSectionsFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
