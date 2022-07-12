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

  project!:Project;
  formEditProy = new FormGroup ({
    id_project: new FormControl('?')

  })

  constructor(public servicio:ProjectService) { }

  ngOnInit(): void {
  }

  public getProject(id:number){
    this.servicio.getProject(id).subscribe(res =>{
      console.log(res)
    }, error =>{
      console.log(error)
    })
  }

}
