import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSectionsBackComponent } from './list-sections-back.component';

describe('ListSectionsBackComponent', () => {
  let component: ListSectionsBackComponent;
  let fixture: ComponentFixture<ListSectionsBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSectionsBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSectionsBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
