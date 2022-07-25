import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ImgExperience } from 'src/app/model/ImgExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  //Atributos Experience
  experiences:Experience[]=[];
  experience!:Experience;
  idExp!:number;
  formEditExp:FormGroup;
  formEditImg:FormGroup;
  

  //Atributos ImgExperience
  //imgExpList:ImgExperience[]=[];
  images:ImgExperience[]=[];
  images1:ImgExperience[]=[];
  image!:ImgExperience;
  

  imgForm = new FormGroup({
    imgLink: new FormControl(''),
    softSkill: new FormControl(''),
  })

  constructor(private expService:ExperienceService, private fb:FormBuilder) { 
    this.formEditExp = this.fb.group({
      id: new FormControl(''),
      company: new FormControl(''),
      asignament: new FormControl(''),
      anio_salida: new FormControl(''),
      duracion: new FormControl(''),
      logo_experience: new FormControl(''),
      link_experience: new FormControl(''),
      imgExperience: this.fb.group({
        imgLink: new FormControl(''),
      softSkill: new FormControl(''),
      })
    })

    this.formEditImg = this.fb.group ({
      imgLink: new FormControl(''),
      softSkill: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.experienceList();
    this.getExperience(this.experience.id);
    this.getExperienceById(this.experience.id)
   // this.imgExpList(this.idExp);
  }

  //Métodos Experiencia
  public experienceList(){
    this.expService.experienceList().subscribe(res=> {
      console.log(res)
      this.experiences = res;
      let [{id, company, asignament, anio_salida, duracion, logo_experience, link_experience, person}] = res
      this.idExp = id;
      this.imgExpList(this.idExp)
    }, error => {
      console.log(error);
    })
  }

public init(id:number){
  this.getExperience(id);
}

  public getExperience(id:number){
    this.expService.getExperience(id).subscribe(res =>{
      const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience} = res
      this.idExp = id;
      this.imgExpList(this.idExp)
      console.log("Lista nueva para imágenes:")
      console.log(this.idExp)
      return this.imgExpList(this.idExp)
      
    }, error => {
      console.log(error)
    })
  }

  getExperienceById(id:number){
    this.expService.getExperience(id).subscribe(res => {
      console.log(res)
      this.experience = res
      this.formEditExp.controls['company'].setValue(this.experience.company);
      this.formEditExp.controls['asignament'].setValue(this.experience.asignament);
      this.formEditExp.controls['anio_salida'].setValue(this.experience.anio_salida);
      this.formEditExp.controls['duracion'].setValue(this.experience.duracion);
      this.formEditExp.controls['logo_experience'].setValue(this.experience.logo_experience);
      this.formEditExp.controls['link_experience'].setValue(this.experience.link_experience);
      console.log(res.id)
    })
    this.imgExpList(id)
  }


  
  public deleteExperience(idExp:number){
    this.expService.deleteExperience(idExp).subscribe(()=>{
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }

  public editExperience(){
    let exp = this.formEditExp.value
    console.log(exp)
    exp.id = this.idExp
    this.expService.updateExperience(this.idExp, exp).subscribe(res=>{
      console.log(res)
      const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience} = res
      this.idExp = id;
     this.editImg(this.idExp)
      console.log(this.idExp)
      window.location.reload()
    }, error => {
      console.error(error)
    })
  }

  //Métodos ImgExperience 
  public imgExpList(id:number){
    this.expService.imgExperienceList(id).subscribe(res=>{
      console.log(res)
      this.images = res;
    }, error => {
      console.log(error);
    })
  }

  public addImg(idExp:number){
    let image = this.formEditImg.value
    this.expService.addImgExperience(idExp, image).subscribe((res)=> {
      //this.images.push(res)
      this.getExperience(idExp);
      console.log(this.formEditImg.value)
      this.formEditImg.reset('')
    }, error => {
      console.log(error)
    })
  }

  public editImg(idImg:number){
    this.expService.updateExperience(idImg, this.formEditImg.value).subscribe(res=>{
    }, error =>{
      console.error(error)
    })
  }

  public deleteImgSub(idExp:number, idImg:number){
    this.expService.deleteImgExperience(idExp, idImg).subscribe(()=>{
      this.getExperience(idExp);
    }, error => {
      console.log(error)
    })
  }

  public deleteImg(idExp:number, idImg:number){
    this.expService.deleteImgExperience(idExp, idImg).subscribe(()=>{
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }

  //Métodos mixtos
  public getExperienceAndImg(id:number){

  }

  

}
