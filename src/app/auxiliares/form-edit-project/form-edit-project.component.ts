import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Project } from 'src/app/model/Project';
import { ProjectService } from '../../servicios/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './form-edit-project.component.html',
  styleUrls: ['./form-edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project!: Project;
  formEditProy = new FormGroup({
    id_project: new FormControl(''),
    name_project: new FormControl(''),
    principal: new FormControl('true'),
    img_proy: new FormControl(''),
    logo_img: new FormControl(''),
    lingk_project: new FormControl(''),
    person: new FormControl(''),
  })

  constructor(public servicio: ProjectService) { }

  ngOnInit(): void {
    //this.getProjectById(this.project.id_project);
  }
/*
  public getProjectById(id: number) {
    this.servicio.getProject(id).subscribe(res => {
      console.log("Esto es form edit")
      console.log(res)
      const {id_project, name_project,principal, description, img_proy, logo_img, link_project, person} = res;
      this.formEditProy.setValue({name_project, principal, description, img_proy, logo_img, link_project})
      
    }, error => {
      console.log(error)
    })
  }*/

  public getProject(id:number){
    this.servicio.getProject(id).subscribe(res=>{
      const {id_project, name_project,principal, description, img_proy, logo_img, link_project, person} = res;
      this.formEditProy.setValue({name_project, principal, description, img_proy, logo_img, link_project})
      
    })
  }

}
