import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomplaintBackComponent } from './listcomplaint-back.component';

describe('ListcomplaintBackComponent', () => {
  let component: ListcomplaintBackComponent;
  let fixture: ComponentFixture<ListcomplaintBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcomplaintBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcomplaintBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
