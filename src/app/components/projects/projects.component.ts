import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/servicios/project.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  

 @Input() dataEntrante:any;

  projects:Project[] = [];
  project!:Project;
  idProy!:number;
  proyToEdit!:number;
 // proyActual: Project={id_project: this.project.id_project, name_project:'',finalizado:false};

  formEditProy = new FormGroup({
    name_project: new FormControl(''),
    description: new FormControl(''),
    principal: new FormControl(''),
    img_proy: new FormControl(''),
    logo_img: new FormControl(''),
    link_project: new FormControl(''),
    person: new FormControl(''),
  })

  formEditProy2 = new FormGroup({
    name_project: new FormControl(''),
    description: new FormControl(''),
    principal: new FormControl(''),
    img_proy: new FormControl(''),
    logo_img: new FormControl(''),
    link_project: new FormControl(''),
    person: new FormControl(''),
  })

  formEditProy1:FormGroup = this.fb.group({
    name_project: new FormControl(''),
    principal: new FormControl(''),
    img_proy: new FormControl(''),
    logo_img: new FormControl(''),
    link_project: new FormControl(''),
  })

  

  constructor(private servicio:ProjectService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.projectList();
    this.getProjectById(this.project.id_project);
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
    this.servicio.getProject(idElem).subscribe({
      next: (res)=>{
        console.log(res);
      }
    })
    this.servicio.deleteProject(idElem).subscribe(()=>{
    window.location.reload()
    }, error => {
      console.log(error)
    })
  }
/*
  public getProjectById(){
    console.log(this.dataEntrante);
    this.servicio.open.emit({
    data:this.dataEntrante
    })
  }
*/
  /*
  public getProjectById(id: number) {
    this.servicio.getProject(id).subscribe(res => {
      console.log(res)
      this.proyToEdit = res.id_project;
    }, error => {
      console.log(error)
    })
  }*/

  public getProjectById(id: number) {
    this.servicio.getProject(id).subscribe(res => {
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

  public getProjectById2(id:number){
      this.servicio.getProject(id).subscribe(res => {
        this.idProy = res.id_project;
        this.project = res;
      
      console.log(this.project);
      this.formEditProy1.controls['name_project'].setValue(this.project.name_project);
      this.formEditProy1.controls['principal'].setValue(this.project.principal);
      this.formEditProy1.controls['description'].setValue(this.project.description);
      this.formEditProy1.controls['img_proy'].setValue(this.project.img_proy);
      this.formEditProy1.controls['logo_img'].setValue(this.project.logo_img);
      this.formEditProy1.controls['link_project'].setValue(this.project.link_project);
    })
  }

  public getProject1(id:number){
    this.servicio.getProject(id).subscribe(res=>{
      const {id_project, name_project, description, principal,  img_proy, logo_img, link_project, person} = res;
      this.idProy=id_project;
      //console.log(res)
      console.log(res.id_project)
      this.formEditProy.setValue({name_project, principal, description, img_proy, logo_img, link_project})
      
    })
  }

  public getProject2(id:number){
    this.servicio.getProject(id).subscribe(res=>{
      const {id_project, name_project, description, principal,  img_proy, logo_img, link_project, person} = res;
      this.idProy=id_project;
      console.log(res)
      console.log(res.id_project)
      this.formEditProy2.setValue({name_project, principal, description, img_proy, logo_img, link_project})
      
    })
  }

  public getProject3(id:number){
    this.servicio.getProject(id).subscribe(res=>{
      const {id_project, name_project, description, principal,  img_proy, logo_img, link_project, person} = res;
      this.idProy=id_project;
      //console.log(res)
      console.log(res.id_project)
      this.formEditProy.setValue({name_project, principal, description, img_proy, logo_img, link_project})
      
    })
  }
  
  //group.setValue({foo: 'only foo'});

  public editProject(){
    
    let proy = this.formEditProy.value
    console.log(proy)
    proy.id = this.idProy
    this.servicio.updateProject(this.idProy, proy).subscribe(res=>{
      console.log(res)

      window.location.reload()
    }, error => {
      console.error(error)
    })
  }

  public clear(){
    

    //this.formEditProy.reset()
    
  }
    
}
