import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImgComponent } from './form-img.component';

describe('FormImgComponent', () => {
  let component: FormImgComponent;
  let fixture: ComponentFixture<FormImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
