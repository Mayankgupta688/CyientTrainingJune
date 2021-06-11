import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddEmployeesComponent } from './reactive-add-employees.component';

describe('ReactiveAddEmployeesComponent', () => {
  let component: ReactiveAddEmployeesComponent;
  let fixture: ComponentFixture<ReactiveAddEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
