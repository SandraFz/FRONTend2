import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Project } from 'src/app/model/Project';
import { ProjectService, Proyecto } from '../../servicios/project.service';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './form-edit-project.component.html',
  styleUrls: ['./form-edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  idRouter!:number;
  actualProy: Proyecto={
    id_project:'',
    name_project:'',
    principal:true,
    img_proy:'',
    logo_img:'',
    link_project:'',
  }


  idProy!:number;
  project!: Project;
  formEditProy = new FormGroup({
    description: new FormControl(''),
    id_project: new FormControl(''),
    name_project: new FormControl(''),
    principal: new FormControl('true'),
    img_proy: new FormControl(''),
    logo_img: new FormControl(''),
    link_project: new FormControl(''),
    
  })
  proyToEdit = ProjectsComponent

  constructor(
    private servicio: ProjectService, 
    private activateRouter:ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    //this.getProjectById(this.project.id_project);
    this.idRouter=this.activateRouter.snapshot.params['id'];
    console.log(this.idRouter)
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
      console.log(res)
      console.log(res.id_project)
      this.formEditProy.setValue({name_project, principal, description, img_proy, logo_img, link_project})
    })
  }

  public editProject(){
    let proy = this.formEditProy.value
   this.idProy = this.formEditProy.value.project.id_project
   console.log(proy)
    this.servicio.updateProject(this.idProy, proy).subscribe(res=>{
      
      alert('edit exitoso')
    }, error => {
      console.error(error)
    })
  }

}
