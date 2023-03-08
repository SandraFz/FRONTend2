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
    experience: new FormControl('')
  })

  constructor( private service:ExperienceService) { }

  ngOnInit(): void {
  }


  public addExperience(){
    let experience = this.formExperience.value
    // let imagen = this.formImgExperience.value
    console.log(`Esto es experience: ${JSON.stringify(experience)}`)
    // console.log(`Esto es image de addImg: ${JSON.stringify(imagen)}`)

    this.service.addExperience(experience).subscribe((res)=> {
      console.log(`Este es el res.id de addExperience: ${res.id}`)

      this.exp.push(res)
      // const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience} = res
      this.idExp = res.id;
      return this.idExp;
      // console.log("FUNNCIONA O NO? ", this.idExp)
      //window.location.reload()
    }, error => {
      console.log(error)
    })
  }

  public addImg(){
    let image = this.formImgExperience.value
    // this.idExp = this.addExperience();
    console.log(`El idExp en addImg: ${this.idExp}`)
    // console.log(`Esto es image de addImg: ${JSON.stringify(image)}`)
    this.service.addImgExperience(this.idExp, image.imgLink).subscribe((res)=> {
      
      this.img.push(res)
    //   console.log("img-experience:")
    //   console.log(this.img)
    }, error => {
      console.log(error)
    })
  }

  public addExpAndImg(){
    this.addExperience()
    // this.addImg()
  }


}
