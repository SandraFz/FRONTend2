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
      images: this.fb.group ({
        id_img: new FormControl(''),
        imgLink: new FormControl(''),
        softSkill: new FormControl(''),
      })
      /*subFormEditImg : this.fb.group ({
        id: new FormControl(''),
        imgLink: new FormControl(''),
        softSkill: new FormControl(''),
      })*/
    })

    this.formEditImg = this.fb.group ({
      id: new FormControl(''),
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
      let [{id, company, asignament, anio_salida, duracion, logo_experience, link_experience, person}] = res
      this.idExp = id;
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
    let expToEdit = this.formEditExp.value
    this.idExp = expToEdit.id
    this.expService.getExperience(id).subscribe(res => {
      console.log('Esto trae el getExperienceById')
      console.log(res)
      this.experience = res
      this.formEditExp.controls['id'].setValue(this.experience.id);
      this.formEditExp.controls['company'].setValue(this.experience.company);
      this.formEditExp.controls['asignament'].setValue(this.experience.asignament);
      this.formEditExp.controls['anio_salida'].setValue(this.experience.anio_salida);
      this.formEditExp.controls['duracion'].setValue(this.experience.duracion);
      this.formEditExp.controls['logo_experience'].setValue(this.experience.logo_experience);
      this.formEditExp.controls['link_experience'].setValue(this.experience.link_experience);
      //this.formEditExp.controls['id_img'].setValue(this.experience.images.id_img)
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

  public editExperience(idExp:number){
    let editedExp = this.formEditExp.value
    console.log("Esto viene del formulario")
    console.log(editedExp)
    //exp.id = this.idExp
    this.expService.updateExperience(editedExp.id, this.formEditExp.value).subscribe(res=>{
      //console.log(res)
      //const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience} = res
      //this.idExp = id;
     //this.editImg(id)
      //console.log(id)
      //window.location.reload()
      this.getExperience(idExp)
      //this.getExperience(editedExp)
    }, error => {
      console.error(error)
    })
  }


  //Métodos ImgExperience 
  public imgExpList(id:number){
    this.expService.imgExperienceList(id).subscribe(res=>{
      console.log(res)
      this.images1 = res;
    }, error => {
      console.log(error);
    })
  }

  public addImg(idImg:number){
    let image = this.formEditImg.value
    this.expService.addImgExperience(idImg, image).subscribe((res)=> {
      //this.images.push(res)
      this.getExperience(idImg);
      console.log(this.formEditImg.value)
      this.formEditImg.reset('')
    }, error => {
      console.log(error)
    })
  }

  public getImg(idImg:number){
    this.expService.getImg(idImg).subscribe(res=>{
      const {id, imgLink, softSkill} = res
      this.idImg = id;
      //this.imgForm.setValue({imgLink, softSkill})
      this.formEditImg.setValue({id, imgLink, softSkill})
      //this.formEditImg.controls['linkImg'].setValue(this.image.imgLink);
      //this.formEditImg.controls['softSkill'].setValue(this.image.softSkill);
      console.log(res)
    })
  }

  public editImg(idExp:number){
    let editedImg = this.formEditImg.value
    this.editImg1  = editedImg.id
    //console.log(editedImg)
    this.expService.updateImg(editedImg.id, this.formEditImg.value).subscribe((res)=>{
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

  public deleteImg(idExp:number, idImg:number){
    this.expService.deleteImgExperience(idExp, idImg).subscribe(()=>{
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }

  

}
