import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/servicios/experience.service';
import { FormControl, FormGroup, FormBuilder, AnyForUntypedForms } from '@angular/forms';
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
  idImg!:number;
  editImg1!:number;
  listImg!:any;
  
  //Atributos ImgExperience
  //images:ImgExperience[]=[];
  images1:ImgExperience[]=[];
  image!:ImgExperience;

  constructor(private expService:ExperienceService, private fb:FormBuilder) { 
    this.formEditExp = this.fb.group({
      id: new FormControl(''),
      company: new FormControl(''),
      asignament: new FormControl(''),
      anio_salida: new FormControl(''),
      duracion: new FormControl(''),
      logo_experience: new FormControl(''),
      link_experience: new FormControl(''),
     /* images: this.fb.group ({
        id_img: new FormControl(''),
        imgLink: new FormControl(''),
        softSkill: new FormControl(''),
      })*/
      /*subFormEditImg : this.fb.group ({
        id: new FormControl(''),
        imgLink: new FormControl(''),
        softSkill: new FormControl(''),
      })*/
    })

    this.formEditImg = this.fb.group ({
      id_img: new FormControl(''),
      imgLink: new FormControl(''),
      softSkill: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.experienceList();
    //this.getExperience(this.experience.id);
    //this.getExperienceById(this.experience.id)
  }

  //Métodos Experiencia
  public experienceList(){
    this.expService.experienceList().subscribe(res=> {
      console.log(res)
      this.experiences = res;
     // let [{id, company, asignament, anio_salida, duracion, logo_experience, link_experience, person}] = res
      //this.idExp = id;
      console.log("Esto viene del primer get y arroja sobre el subForm:")
      //this.listImg = subFormEditImg;
      //this.imgExpList(this.idExp)
      console.log(this.listImg)
    }, error => {
      console.log(error);
    })
  }
/*
public init(id:number){
  this.getExperience(id);
}*/

  public getExperience(id:number){
    this.expService.getExperience(id).subscribe(res =>{
      const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience, images} = res
      //this.idExp = id;
      this.formEditExp.setValue({id, company, asignament, anio_salida, duracion, logo_experience, link_experience, images})
      //this.imgExpList(this.idExp)
      console.log("Lista nueva para imágenes:")
      console.log(res)
      //return this.imgExpList(this.idExp)
      
    }, error => {
      console.log(error)
    })
  }

  getExperienceById(id:number){
    let expToEdit = this.formEditExp.value
    this.idExp = expToEdit.id
    this.expService.getExperience(id).subscribe(res => {
      const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience, images} = res
      this.idExp = id;
      console.log('Esto trae el getExperienceById')
      console.log(this.formEditExp.value)
      this.experience = res
      this.formEditExp.controls['id'].patchValue(this.experience.id);
      this.formEditExp.controls['company'].patchValue(this.experience.company);
      this.formEditExp.controls['asignament'].patchValue(this.experience.asignament);
      this.formEditExp.controls['anio_salida'].patchValue(this.experience.anio_salida);
      this.formEditExp.controls['duracion'].patchValue(this.experience.duracion);
      this.formEditExp.controls['logo_experience'].patchValue(this.experience.logo_experience);
      this.formEditExp.controls['link_experience'].patchValue(this.experience.link_experience);
      //this.formEditExp.controls['images.id_img'].patchValue(this.experience.images);
      console.log(res.id)
    })
   // this.imgExpList(id)
  }


  
  public deleteExperience(idExp:number){
    this.expService.deleteExperience(idExp).subscribe(()=>{
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }

  public editExperience(){
    let editedExp = this.formEditExp.value
    console.log("Esto viene del formulario")
    console.log(editedExp)
    //exp.id = this.idExp
    this.expService.updateExperience(this.idExp, this.formEditExp.value).subscribe(res=>{
      //console.log(res)
      //const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience} = res
      //this.idExp = id;
     //this.editImg(id)
      //console.log(id)
      //window.location.reload()
      this.getExperience(this.idExp)
      //this.getExperience(editedExp)
    }, error => {
      console.error(error)
    })
  }


  //Métodos ImgExperience 
  public imgExpList(){
    this.expService.imgExperienceList(this.idExp).subscribe(res=>{
      console.log(res)
      this.images1 = res;
    }, error => {
      console.log(error);
    })
  }

  public addImg(idImg:number){
    let image = this.formEditImg.value
    this.expService.addImgExperience(idImg, image).subscribe((res)=> {
      this.images1.push(res)
      this.getExperience(idImg);
      console.log(this.formEditImg.value)
      this.formEditImg.reset('')
    }, error => {
      console.log(error)
    })
  }

  public getImg(idImg:number){
    this.expService.getImg(idImg).subscribe(res=>{
      const {id_img, imgLink, softSkill} = res
      this.idImg = id_img;
      //this.imgForm.setValue({imgLink, softSkill})
      this.formEditImg.setValue({id_img, imgLink, softSkill})
      /*this.formEditImg.controls['id_img'].setValue(this.image.id_img);
      this.formEditImg.controls['linkImg'].setValue(this.image.imgLink);
      this.formEditImg.controls['softSkill'].setValue(this.image.softSkill);*/
      console.log(res)
    })
  }

  public editImg(idExp:number){
    let editedImg = this.formEditImg.value
    this.editImg1  = editedImg.id
    //console.log(editedImg)
    this.expService.updateImg(this.idImg, this.formEditImg.value).subscribe((res)=>{
      console.log(res)
      this.getExperience(idExp)
      this.formEditImg.reset()
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
/*
  public deleteImg(idExp:number, idImg:number){
    this.expService.deleteImgExperience(idExp, idImg).subscribe(()=>{
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }*/

  

}
