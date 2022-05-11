import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscomplaintFrontComponent } from './detailscomplaint-front.component';

describe('DetailscomplaintFrontComponent', () => {
  let component: DetailscomplaintFrontComponent;
  let fixture: ComponentFixture<DetailscomplaintFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscomplaintFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscomplaintFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
