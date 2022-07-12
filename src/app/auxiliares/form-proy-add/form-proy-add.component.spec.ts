import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProyAddComponent } from './form-proy-add.component';

describe('FormProyAddComponent', () => {
  let component: FormProyAddComponent;
  let fixture: ComponentFixture<FormProyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
