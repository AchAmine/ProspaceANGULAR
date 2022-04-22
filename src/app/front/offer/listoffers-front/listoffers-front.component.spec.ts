import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffersFrontComponent } from './listoffers-front.component';

describe('ListoffersFrontComponent', () => {
  let component: ListoffersFrontComponent;
  let fixture: ComponentFixture<ListoffersFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListoffersFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffersFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
