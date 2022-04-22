import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticlesFrontComponent } from './listarticles-front.component';

describe('ListarticlesFrontComponent', () => {
  let component: ListarticlesFrontComponent;
  let fixture: ComponentFixture<ListarticlesFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarticlesFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarticlesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
