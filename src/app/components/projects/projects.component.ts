import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/servicios/project.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Project[] = [];
  project!:Project;
  id?:number;

  formNewProject = new FormGroup ({
    //id_project: new FormControl,
     name_project: new FormControl(''),
     principal: new FormControl('true'),
     description: new FormControl(''),
     img_proy: new FormControl(''),
     logo_img: new FormControl(''),
     link_project: new FormControl(''),
   })

  formEditProy = new FormGroup({
    id_project: new FormControl(''),
    name_project: new FormControl(''),
    principal: new FormControl('true'),
    img_proy: new FormControl(''),
    logo_img: new FormControl(''),
    lingk_project: new FormControl(''),
    person: new FormControl(''),
  })

  

  constructor(private servicio:ProjectService) { }

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

  public addProject3(){
    let project = this.formNewProject.value
    this.servicio.addProject(project).subscribe((res)=> {
      this.projects.push(res)
      this.formNewProject.reset('')
    }, error => {
      console.error(error)
    })
  }

  public getProject(id:number){
    this.servicio.getProject(id).subscribe(res=>{
      console.log(res)
    }, error =>{
      console.log(error)
    })
  }

  public deleteProject(idElem:number){
    this.servicio.deleteProject(idElem).subscribe(()=>{

    }, error => {
      console.log(error)
    })
  }

  public getProjectById(id: number) {
    this.servicio.getProject(id).subscribe(res => {
      const {id_project, name_project,principal, description, img_proy, logo_img, link_project} = res;
      this.formEditProy.setValue({name_project, principal, description, img_proy, link_project})
      console.log(res)
    }, error => {
      console.log(error)
    })
  }

  public getProject1(id:number){
    this.servicio.getProject(id).subscribe(res=>{
      const {id_project, name_project,principal, description, img_proy, logo_img, link_project} = res;
      this.formEditProy.setValue({name_project, principal, description, img_proy, logo_img, link_project})
      this.id=id;
    })
  }

  public editProject(){
    let proy = this.formEditProy.value
    proy.id_project = this.id
    this.servicio.updateProject(proy.id_project, proy).subscribe(res=>{
      console.log(res)
    }, error => {
      console.error(error)
    })
  }
    
  

}
