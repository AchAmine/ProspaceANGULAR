import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffersBackComponent } from './listoffers-back.component';

describe('ListoffersBackComponent', () => {
  let component: ListoffersBackComponent;
  let fixture: ComponentFixture<ListoffersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListoffersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
