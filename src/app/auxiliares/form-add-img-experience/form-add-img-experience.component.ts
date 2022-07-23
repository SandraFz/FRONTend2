import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ImgExperience } from 'src/app/model/ImgExperience';
import { ExperienceService } from 'src/app/servicios/experience.service';

@Component({
  selector: 'app-form-add-img-experience',
  templateUrl: './form-add-img-experience.component.html',
  styleUrls: ['./form-add-img-experience.component.css']
})
export class FormAddImgExperienceComponent implements OnInit {

  img:ImgExperience[] = [];
  formImgExperience = new FormGroup ({
    imgLink: new FormControl(''),
    softSkill: new FormControl(''),
  })

  constructor(private service:ExperienceService) { }

  ngOnInit(): void {
  }

  public addImgExperience(id:number){
    let exp = this.service.getExperience(id)
    let image = this.formImgExperience.value
    this.service.addImgExperience(id, image).subscribe(res=>{
      this.img.push(res)
    }, error => {
      console.log(error)
    })
  }

}
