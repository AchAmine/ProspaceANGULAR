import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingarticlesFrontComponent } from './followingarticles-front.component';

describe('FollowingarticlesFrontComponent', () => {
  let component: FollowingarticlesFrontComponent;
  let fixture: ComponentFixture<FollowingarticlesFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingarticlesFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingarticlesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
