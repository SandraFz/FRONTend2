import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditExperienceComponent } from './form-edit-experience.component';

describe('FormEditExperienceComponent', () => {
  let component: FormEditExperienceComponent;
  let fixture: ComponentFixture<FormEditExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
