import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Experience } from 'src/app/model/experience';
import { ImgExperience } from 'src/app/model/ImgExperience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-form-add-experience',
  templateUrl: './form-add-experience.component.html',
  styleUrls: ['./form-add-experience.component.css']
})
export class FormAddExperienceComponent implements OnInit {

  exp:Experience[] = [];
  img:ImgExperience[] = [];
  idExp!:number;
  //experience!:Experience;
  formExperience = new FormGroup ({
    company: new FormControl(''),
    asignament: new FormControl(''),
    anio_salida: new FormControl(''),
    duracion: new FormControl(''),
    link_experience: new FormControl(''),
  })

  formImgExperience = new FormGroup ({
    imgLink: new FormControl(''),
    softSkill: new FormControl(''),
  })

  constructor( private service:ExperienceService) { }

  ngOnInit(): void {
  }

  public addExperience(){
    let experience = this.formExperience.value
    console.log(experience)
    this.service.addExperience(experience).subscribe((res)=> {
      this.exp.push(res)
      const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience} = res
      this.idExp = id;
      this.addImg(this.idExp)
      console.log("this.idExp")
      console.log(this.idExp)
      //window.location.reload()
    }, error => {
      console.log(error)
    })
  }

  public addImg(id:number){
    let image = this.formImgExperience.value
    this.service.addImgExperience(id, image.imgLink).subscribe((res)=> {
      
      this.img.push(res)
      console.log("img-experience:")
    
      console.log(this.img)
    }, error => {
      console.log(error)
    })
  }

}
