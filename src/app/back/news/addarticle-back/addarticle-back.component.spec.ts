import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarticleBackComponent } from './addarticle-back.component';

describe('AddarticleBackComponent', () => {
  let component: AddarticleBackComponent;
  let fixture: ComponentFixture<AddarticleBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddarticleBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarticleBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
