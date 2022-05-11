import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscomplaintBackComponent } from './detailscomplaint-back.component';

describe('DetailscomplaintBackComponent', () => {
  let component: DetailscomplaintBackComponent;
  let fixture: ComponentFixture<DetailscomplaintBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscomplaintBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscomplaintBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
