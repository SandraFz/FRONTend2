import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddExperienceComponent } from './form-add-experience.component';

describe('FormAddExperienceComponent', () => {
  let component: FormAddExperienceComponent;
  let fixture: ComponentFixture<FormAddExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
