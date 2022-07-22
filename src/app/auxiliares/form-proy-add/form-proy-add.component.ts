import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { Project } from '../../model/Project';
import { ProjectClass } from '../../model/ProjectClass';
import { ProjectService } from '../../servicios/project.service';
import { IntegrationService } from '../../servicios/integration.service';

@Component({
  selector: 'app-form-proy-add',
  templateUrl: './form-proy-add.component.html',
  styleUrls: ['./form-proy-add.component.css']
})
export class FormProyAddComponent implements OnInit {
  proy:ProjectClass[] = []
  projects:Project[] = [];
  project!:Project;
  formProject = new FormGroup ({
   //id_project: new FormControl,
    name_project: new FormControl(''),
    principal: new FormControl('true'),
    description: new FormControl(''),
    img_proy: new FormControl(''),
    logo_img: new FormControl(''),
    link_project: new FormControl(''),
  })
  

  idPers=1;
  idProy:any="";

  constructor(private integration:IntegrationService, private servicio:ProjectService, private formBuilder:FormBuilder) {  }

  ngOnInit(): void {
    this.projectList();
    /*
  newProjectForm = this.formBuilder.group({
    id_project: [''],
    name_project: [''],
    principal: [''] ,
    description: [''],
    img_proy: [''],
    logo_img: [''],
    link_project: [''],
  })
  */
    
  }

  public projectList(){
    
    this.servicio.projectList().subscribe(res => {
      console.log(res)
      this.projects = res;
    }, error => {
      console.log("projectsComponent: " + error);})
  }

  onSubmit(){
    this.formProject.controls['name_project'].setValue(this.project.name_project);
    this.formProject.controls['principal'].setValue(this.project.principal);
    this.formProject.controls['name_project'].setValue(this.project.description);
    this.formProject.controls['img_proy'].setValue(this.project.img_proy);
    this.formProject.controls['name_project'].setValue(this.project.logo_img);
    this.formProject.controls['link_project'].setValue(this.project.link_project);
  }
/*
  public addProject(){
    console.log(this.formProject.value);
    this.servicio.addProject(this.idPers, this.formProject.value).subscribe(res => {
      console.log(res);
      this.formProject.reset
    }, error => {
      console.error(error);
    })
  }*/
/*
  public addProject2(){
    
    this.servicio.addProject(this.idPers, this.formProject.value).subscribe(()=>{
    }, error => {
      console.log("updatePerson: " + error)
    });
  }*/


  public addProjectX(){
    this.servicio.addProject(this.formProject.value).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
        alert("Registro exitoso!");
      }
    })
  }

  public addProject1(){
    this.servicio.addProject(this.formProject.value).subscribe( res =>{
      
     //this.proy.push(res)
      console.log(res);
      window.location.reload();
      alert("Projecto agregado")
    }, error => {
      console.error(error);
    });
  }

  public addProject3(){
    let project = this.formProject.value
    this.servicio.addProject(project).subscribe((res)=> {
      this.proy.push(res)
      window.location.reload()
    }, error => {
      console.error(error)
    })
  }
  
  

}
