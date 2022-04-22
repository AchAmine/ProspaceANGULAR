import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSidebarComponent } from './back-sidebar.component';

describe('BackSidebarComponent', () => {
  let component: BackSidebarComponent;
  let fixture: ComponentFixture<BackSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
