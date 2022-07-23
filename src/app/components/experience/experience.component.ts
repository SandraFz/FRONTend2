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

  //Atributos ImgExperience
  //imgExpList:ImgExperience[]=[];
  images:ImgExperience[]=[];
  image!:ImgExperience;

  constructor(private expService:ExperienceService, private fb:FormBuilder) { 
    this.formEditExp = fb.group({
      id:[''],
      company:[''],
      asignament:[''],
      anio_salida:[''],
      duracion:[''],
      logo_experience:[''],
      link_experience:[''],
    })
  }

  ngOnInit(): void {
    this.experienceList();
    //this.imgExpList(this.idExp);
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

  public deleteImgProject(id:number){
    this.expService.deleteExperience(id).subscribe(()=>{
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }

}
