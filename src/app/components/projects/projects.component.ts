import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/servicios/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Project[] = [];
  project!:Project;
  id?:number=1;

  

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

}
