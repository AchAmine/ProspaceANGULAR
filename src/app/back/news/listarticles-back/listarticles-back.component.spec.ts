import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarticlesBackComponent } from './listarticles-back.component';

describe('ListarticlesBackComponent', () => {
  let component: ListarticlesBackComponent;
  let fixture: ComponentFixture<ListarticlesBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarticlesBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarticlesBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
