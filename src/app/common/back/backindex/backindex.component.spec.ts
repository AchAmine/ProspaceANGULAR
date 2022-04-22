import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackindexComponent } from './backindex.component';

describe('BackindexComponent', () => {
  let component: BackindexComponent;
  let fixture: ComponentFixture<BackindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
