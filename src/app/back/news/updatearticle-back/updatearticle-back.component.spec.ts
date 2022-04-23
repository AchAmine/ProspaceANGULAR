import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatearticleBackComponent } from './updatearticle-back.component';

describe('UpdatearticleBackComponent', () => {
  let component: UpdatearticleBackComponent;
  let fixture: ComponentFixture<UpdatearticleBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatearticleBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatearticleBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
