import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationManagmentComponent } from './formation-managment.component';

describe('FormationManagmentComponent', () => {
  let component: FormationManagmentComponent;
  let fixture: ComponentFixture<FormationManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
