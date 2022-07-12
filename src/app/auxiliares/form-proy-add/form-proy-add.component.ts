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
 
  miFormulario!:FormGroup;

  constructor(private servicio:ProjectService, private formBuilder:FormBuilder) {  }

  ngOnInit(): void {
    this.miFormulario=this.formBuilder.group({ 
    name_project: new FormControl('', [Validators.required]),
    principal: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    img_proy: new FormControl('', [Validators.required]),
    logo_img: new FormControl('', [Validators.required]),
    link_project: new FormControl('', [Validators.required])
    });
  }

  get name_project(){
    return this.miFormulario.get("name_project");
  }

  get principal(){
    return this.miFormulario.get("principal");
  }
  get description(){
    return this.miFormulario.get("description");
  }
  get img_proy(){
    return this.miFormulario.get("img_proy");
  }
  get logo_img(){
    return this.miFormulario.get("logo_img");
  }
  get link_project(){
    return this.miFormulario.get("link_project");
  }
  
  

  onSubmit(){
    this.servicio.addProject(this.miFormulario.value).subscribe({
      next:(response)=>{
        console.log(response);
        window.location.reload();
        alert("Projecto registrado!")
      }
    })
  }


}
