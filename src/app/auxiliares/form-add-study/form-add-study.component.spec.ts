import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddStudyComponent } from './form-add-study.component';

describe('FormAddStudyComponent', () => {
  let component: FormAddStudyComponent;
  let fixture: ComponentFixture<FormAddStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
