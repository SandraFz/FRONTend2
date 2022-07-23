import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddImgExperienceComponent } from './form-add-img-experience.component';

describe('FormAddImgExperienceComponent', () => {
  let component: FormAddImgExperienceComponent;
  let fixture: ComponentFixture<FormAddImgExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddImgExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddImgExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
