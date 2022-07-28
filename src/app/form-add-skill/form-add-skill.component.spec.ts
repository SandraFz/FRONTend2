import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddSkillComponent } from './form-add-skill.component';

describe('FormAddSkillComponent', () => {
  let component: FormAddSkillComponent;
  let fixture: ComponentFixture<FormAddSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
