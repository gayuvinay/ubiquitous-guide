import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbystateComponent } from './sortbystate.component';

describe('SortbystateComponent', () => {
  let component: SortbystateComponent;
  let fixture: ComponentFixture<SortbystateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbystateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbystateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
