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
  //proyToEdit!:number;
  //formEditProy:FormGroup;
  formEditProy2!:FormGroup;
  formEditProy1:any;
 // proyActual: Project={id_project: this.project.id_project, name_project:'',finalizado:false};

  formEditWithInterface = {
    name_project:'',
    description:'',
    principal:'',
    img_proy:'',
    logo_proy:'',
    link_project:'',
  }

  formEditProy:FormGroup = new FormGroup({
    id_project: new FormControl(),
    name_project: new FormControl(),
    description: new FormControl(),
    principal: new FormControl(),
    img_proy: new FormControl(),
    logo_img: new FormControl(),
    link_project: new FormControl(),
    person: new FormControl(),
  });

 

  

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

    this.formEditProy2 = new FormGroup({
      name_project: new FormControl(),
      description: new FormControl(),
      principal: new FormControl(),
      img_proy: new FormControl(),
      logo_img: new FormControl(),
      link_project: new FormControl(),
      
    })
    
    
    
  }

  ngOnInit(): void {
    this.projectList();
    //this.getProjectById(this.project.id_project);

    
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
      console.log("getById arroja:")
      console.log(res)
      this.project = res
      this.formEditProy1.controls['id_project'].setValue(this.project.id_project);
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

  getAndPut(project: Project) {
    console.log(project);
    this.formEditProy1.controls['id_project'].setValue(project.id_project);
    this.formEditProy1.controls['name_project'].setValue(project.name_project);
    this.formEditProy1.controls['principal'].setValue(project.principal);
    this.formEditProy1.controls['description'].setValue(project.description);
    this.formEditProy1.controls['img_proy'].setValue(project.img_proy);
    this.formEditProy1.controls['logo_img'].setValue(project.logo_img);
    this.formEditProy1.controls['link_project'].setValue(project.link_project);
    /*this.miFormulario.controls['id'].setValue(habilidad.id);
    this.miFormulario.controls['name'].setValue(habilidad.name);
    this.miFormulario.controls['percentage'].setValue(habilidad.percentage);*/
  }

  public getProjectById2(id:number){
      this.servicio.getProject(id).subscribe(res => {
        this.idProy = res.id_project;
        this.project = res;
      
     
      this.formEditProy1.controls['name_project'].setValue(this.project.name_project);
      this.formEditProy1.controls['principal'].setValue(this.project.principal);
      this.formEditProy1.controls['description'].setValue(this.project.description);
      this.formEditProy1.controls['img_proy'].setValue(this.project.img_proy);
      this.formEditProy1.controls['logo_img'].setValue(this.project.logo_img);
      this.formEditProy1.controls['link_project'].setValue(this.project.link_project);
      console.log(this.formEditProy1.value);
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
  

  public editProject(id:number){
    //let proy = this.formEditProy.value
    console.log("editProjet arroja esto:")
    //console.log(proy)
    console.log(id)
    this.servicio.updateProject(id, this.formEditProy1.value).subscribe(res=>{
      console.log(res)
     
      window.location.reload()
    }, error => {
      console.error(error)
    })
  }

  public clear(){
    
    this.formEditProy.reset()
    
  }
    
}
