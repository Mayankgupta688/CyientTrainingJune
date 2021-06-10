import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAttributeDirectiveComponent } from './using-attribute-directive.component';

describe('UsingAttributeDirectiveComponent', () => {
  let component: UsingAttributeDirectiveComponent;
  let fixture: ComponentFixture<UsingAttributeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingAttributeDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
