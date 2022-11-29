import { Component, OnInit } from '@angular/core';

import { Study } from '../../model/Study';
import { StudiesService } from 'src/app/servicios/studies.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  studies:Study[] = [];
  study!:Study;
  idStu!:number;
  idStuToEdit!:number;
  formEditStu:FormGroup;

  constructor(private servicio:StudiesService, private fb:FormBuilder) {

    this.formEditStu = this.fb.group({
      id: new FormControl(''),
      insti_studios: new FormControl(''),
      title_studies: new FormControl(''),
      anio_iniStudy: new FormControl(''),
      anio_end: new FormControl(''),
      logo_studies: new FormControl(''),
      link_studies: new FormControl(''),
    })
   }

  ngOnInit(): void {
    this.studiesList();
  }

  public studiesList(){
    this.servicio.studiesList().subscribe(res => {
      this.studies = res;
    }, error => {
      console.log(error);
    })
  }

  public deleteStudy(id:number){
    this.servicio.deleteStudy(id).subscribe(()=> {
      console.log("El id que trae delete:", id)
      window.location.reload();
    }, error => {
      console.log("DeleteStudy error:", error);
    })
  }

  public getStudy(id:number){
    this.servicio.getStudy(id).subscribe(res => {
      console.log("El res de getStudy antes del setValue:", res)
      this.study = res
      this.formEditStu.controls['id'].setValue(this.study.id);
      this.formEditStu.controls['insti_studios'].setValue(this.study.insti_studios);
      this.formEditStu.controls['title_studies'].setValue(this.study.title_studies);
      this.formEditStu.controls['anio_iniStudy'].setValue(this.study.anio_iniStudy);
      this.formEditStu.controls['anio_end'].setValue(this.study.anio_end);
      this.formEditStu.controls['logo_studies'].setValue(this.study.logo_studies);
      this.formEditStu.controls['link_studies'].setValue(this.study.link_studies);
      this.idStuToEdit = res.id;
      console.log("El formEditStu después del setValue:", this.formEditStu.value)
    }, error => {
      console.log(error)
    })
  }

  public editStudy(){
    this.servicio.updateStudy(this.idStuToEdit, this.formEditStu.value).subscribe((res) => {
     window.location.reload()
    }, error => {
      console.error(error)
    })
  }
}
