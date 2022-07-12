import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditComponent } from './button-edit';

describe('Form1Component', () => {
  let component: ButtonEditComponent;
  let fixture: ComponentFixture<ButtonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
