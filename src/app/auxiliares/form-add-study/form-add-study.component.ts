import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Study } from 'src/app/model/Study';
import { StudiesService } from 'src/app/servicios/studies.service';

@Component({
  selector: 'app-form-add-study',
  templateUrl: './form-add-study.component.html',
  styleUrls: ['./form-add-study.component.css']
})
export class FormAddStudyComponent implements OnInit {

  studies:Study[] = [];
  study!:Study;
  formAddStudy = new FormGroup ({
    id: new FormControl(''),
    insti_studios: new FormControl(''),
    title_studies: new FormControl(''),
    anio_iniStudy: new FormControl(''),
    anio_end: new FormControl(''),
    logo_studies: new FormControl(''),
    link_studies: new FormControl(''),
  })

  constructor(private servicio:StudiesService) { }

  ngOnInit(): void {
  }

  public addStudy(){
    let stu = this.formAddStudy.value
    this.servicio.addStudy(stu).subscribe((res)=> {
      this.studies.push(res)
      // window.location.reload()
    }, error => {
      console.log(error)
    })
  }

}
