import { Component, OnInit } from '@angular/core';

import { Skill } from '../../model/Skill';
import { SkillsService } from 'src/app/servicios/skills.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skill[]=[];
  skill!:Skill;
  idSk!:number;
  formEditSk:FormGroup;

  constructor(private servicio:SkillsService, private fb:FormBuilder) {

    this.formEditSk = this.fb.group({
      id: new FormControl(''),
      name_skill: new FormControl(''),
      skill_progress: new FormControl(''),
    })
   }

  ngOnInit(): void {
    this.skList();
  }

  public skList(){
    this.servicio.skillList().subscribe(res => {
      this.skills = res;
    }, error => {
      console.log(error);
    })
  }

  public deleteSk(id:number){
    this.servicio.deleteSkill(id).subscribe(()=>{
      window.location.reload()
    }, error => {
      console.log(error);
    })
  }

  public getSkillById(id:number){
    this.servicio.getSkill(id).subscribe(res => {
      this.formEditSk.controls['id'].setValue(this.skill.id);
    this.formEditSk.controls['name_skill'].setValue(this.skill.name_skill);
    this.formEditSk.controls['skill_progress'].setValue(this.skill.skill_progress);
    }, error => {
      console.log(error)
    })
  }

  public editSkill(id:number){
    this.servicio.updateSkill(id, this.formEditSk.value).subscribe((res) => {
      window.location.reload()
    }, error => {
      console.error(error)
    })
  }


}
