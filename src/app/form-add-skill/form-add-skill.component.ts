import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Skill } from '../model/Skill';
import { SkillsService } from '../skills.service';


@Component({
  selector: 'app-form-add-skill',
  templateUrl: './form-add-skill.component.html',
  styleUrls: ['./form-add-skill.component.css']
})
export class FormAddSkillComponent implements OnInit {

  skills:Skill[] = [];
  sk!:Skill;
  formAddSkill = new FormGroup ({
    name_skill: new FormControl(''),
    skill_progress: new FormControl(''),
  })

  constructor(private servicio:SkillsService) { }

  ngOnInit(): void {
  }

  public addSkill(){
    let skill = this.formAddSkill.value
    this.servicio.addSkill(skill).subscribe((res)=> {
      this.skills.push(res)
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }

}
