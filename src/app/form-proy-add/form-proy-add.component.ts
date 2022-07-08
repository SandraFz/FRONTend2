import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Project } from '../model/project';
import { ProjectService } from '../servicios/project.service';

@Component({
  selector: 'app-form-proy-add',
  templateUrl: './form-proy-add.component.html',
  styleUrls: ['./form-proy-add.component.css']
})
export class FormProyAddComponent implements OnInit {

  projects:Project[] = [];
  project!:Project;
  formProject = new FormGroup ({
    id_project: new FormControl,
    name_project: new FormControl,
    principal: new FormControl ,
    description: new FormControl,
    img_proy: new FormControl,
    logo_img: new FormControl,
    link_project: new FormControl,
  })
  idPers=1;
  idProy:any="";

  constructor(private servicio:ProjectService) { }

  ngOnInit(): void {

    this.projectList();
  }

  public projectList(){
    
    this.servicio.projectList().subscribe(res => {
      console.log(res)
      this.projects = res;
    }, error => {
      console.log("projectsComponent: " + error);})
  }

  

  public addProject(){
    this.servicio.addProject(this.formProject.value).subscribe(res => {
      this.formProject.reset
    }, error => {
      console.log(error);
    })
  }

}
