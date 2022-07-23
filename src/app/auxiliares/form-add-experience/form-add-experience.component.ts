import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-form-add-experience',
  templateUrl: './form-add-experience.component.html',
  styleUrls: ['./form-add-experience.component.css']
})
export class FormAddExperienceComponent implements OnInit {

  exp:Experience[] = [];
  experience!:Experience;
  formExperience = new FormGroup ({
    company: new FormControl(''),
    asginament: new FormControl(''),
    anio_salida: new FormControl(''),
    duracion: new FormControl(''),
    link_experience: new FormControl(''),
  })

  constructor( private service:ExperienceService) { }

  ngOnInit(): void {
  }

  public addExperience(){
    let experience = this.formExperience.value
    this.service.addExperience(experience).subscribe((res)=> {
      this.exp.push(res)
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }

}
