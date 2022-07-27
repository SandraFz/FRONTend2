
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/servicios/project.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Project[] = [];
  project!:Project;
  idProy!:number;
  formEditProy1:FormGroup;

  constructor(private servicio:ProjectService, private fb:FormBuilder) { 

    this.formEditProy1 = this.fb.group({
      id_project: new FormControl(''),
      name_project: new FormControl(''),
      description: new FormControl(''),
      principal: new FormControl(''),
      img_proy: new FormControl(''),
      logo_img: new FormControl(''),
      link_project: new FormControl(''),
    })
    
  }

  ngOnInit(): void {
    this.projectList();
  }

  public projectList(){
    this.servicio.projectList().subscribe(res => {
      console.log(res)
      this.projects = res;
    }, error => {
      console.log("pojectsComponent: " + error);})
  }

  public deleteProject(idElem:number){
    this.servicio.deleteProject(idElem).subscribe(()=>{
    window.location.reload()
    }, error => {
      console.log(error)
    })
  }

  public getProjectById(id: number){
    this.servicio.getProject(id).subscribe(res => {
      console.log("getById arroja:")
      console.log(res)
      this.project = res
      this.formEditProy1.controls['name_project'].setValue(this.project.name_project);
      this.formEditProy1.controls['principal'].setValue(this.project.principal);
      this.formEditProy1.controls['description'].setValue(this.project.description);
      this.formEditProy1.controls['img_proy'].setValue(this.project.img_proy);
      this.formEditProy1.controls['logo_img'].setValue(this.project.logo_img);
      this.formEditProy1.controls['link_project'].setValue(this.project.link_project);
    }, error => {
      console.log(error)
    })
  } 

  public editProject(id:number){
    this.servicio.updateProject(id, this.formEditProy1.value).subscribe((res)=>{
      window.location.reload()
    }, error => {
      console.error(error)
    })
  }
    
}
