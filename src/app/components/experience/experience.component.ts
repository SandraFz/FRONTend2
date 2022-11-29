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
  
  idImg!:number;
  editImg1!:number;
  listImg!:any;
  formEditImg:FormGroup;
  
  //Atributos ImgExperience
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
      /*images: this.formEditImg = this.fb.group({
        id_img: new FormControl(''),
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
    //this.imgExpList1();
    console.log("this.experience.images")
    console.log(this.images1)

  }

  /*public imgExpList1(){
    this.expService.imgExperienceList(11).subscribe(res=>{
      console.log("imgExpList1")
      console.log(res)
      this.images1 = res;
    }, error => {
      console.log(error);
    })
  }*/

  //Métodos Experiencia
  public experienceList(){
    this.expService.experienceList().subscribe(res=> {
      this.experiences = res;
      console.log("En lista de experiencias:")
      console.log(res)

      
      //this.imgExpList(experiences);
    }, error => {
      console.log(error);
    })
  }

  public getExperience(idExp:number){
    this.expService.getExperience(idExp).subscribe(res =>{
      const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience} = res
      this.idExp = res.id;
      this.formEditExp.patchValue({id, company, asignament, anio_salida, duracion, logo_experience, link_experience})
      console.log("Lista nueva para imágenes:")
      console.log(this.formEditExp.value)
      this.imgExpList(res.id)
      
      console.log("console:", res)
      //return this.imgExpList(this.idExp)
      
    }, error => {
      console.log(error)
    })
  }

  getExperienceById(id:number){
    let expToEdit = this.formEditExp.value
    
    this.idExp = expToEdit.id
    this.expService.getExperience(id).subscribe(res => {
      const {id, company, asignament, anio_salida, duracion, logo_experience, link_experience} = res
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
      console.log('Esto es el res de getById después del get:', res)
      console.log('El valor nuevo asignado a idExp:', this.idExp)
    })
   this.imgExpList(this.experience.id)
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
    console.log("Esto viene en el formulario al hacer click en edit:", this.formEditExp.value)
    //console.log(editedExp)
    this.expService.updateExperience(this.idExp, this.formEditExp.value).subscribe(res=>{
      console.log("res después de hacer click en editExperience:", res)
      //window.location.reload()
      this.getExperience(this.idExp)
      //this.getExperience(editedExp)
    }, error => {
      console.error(error)
    })
  }

  //Métodos ImgExperience 
  public imgExpList(idExp:number){
    this.expService.imgExperienceList(idExp).subscribe(res=>{
      console.log("res de imgExpList en formulario:")
      console.log(res)
      this.images1 = res;
    }, error => {
      console.log(error);
    })
  }

  public addImg(){
    let image = this.formEditImg.value
    console.log('SubFormularioEdit:', this.formEditImg.value)
    this.expService.addImgExperience(this.idExp, image).subscribe((res)=> {
      this.images1.push(res)
      console.log("Res de addImg:", res)
      this.getExperience(this.idExp);
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

  public editImg(){
    //let editedImg = this.formEditImg.value
    //this.editImg1  = editedImg.id
    this.expService.updateImg(this.idImg, this.formEditImg.value).subscribe((res)=>{
      console.log(res)
      this.getExperience(this.idExp)
      this.formEditImg.reset()
      console.log("Res de editImg:", res)
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

  clear(){
    window.location.reload()
  }

}
