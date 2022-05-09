import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarticlecommentFrontComponent } from './editarticlecomment-front.component';

describe('EditarticlecommentFrontComponent', () => {
  let component: EditarticlecommentFrontComponent;
  let fixture: ComponentFixture<EditarticlecommentFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarticlecommentFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarticlecommentFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
