import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNavbarComponent } from './back-navbar.component';

describe('BackNavbarComponent', () => {
  let component: BackNavbarComponent;
  let fixture: ComponentFixture<BackNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
