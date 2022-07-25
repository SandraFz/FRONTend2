import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Person } from '../../model/person';
import { IntegrationService} from '../../servicios/integration.service'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

people:Person[]=[]; 
person!:Person;
idPers:number=1;
formEdit:FormGroup;

  constructor(private integration:IntegrationService, private fb:FormBuilder) { 

    this.formEdit = this.fb.group({
      id_person: new FormControl(''),
      name: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      profession: new FormControl(''),
      origin: new FormControl(''),
      presentation: new FormControl(''),
      professional_photo: new FormControl(''),
      //email: new FormControl('')
    })
  }

  ngOnInit(): void {
   //this.getPerson();
   this.getPersonToEdit();
  }

  public getPerson(){
    this.integration.getPerson().subscribe(res => {
      console.log(res);
      this.person=res;
    }, error => {
      console.log(error);
    })
  }

  getPersonToEdit(){
    this.integration.getPerson().subscribe(res => {
      console.log("getById arroja:")
      console.log(res)
      this.person = res
    this.formEdit.controls['name'].setValue(this.person.name);
    this.formEdit.controls['lastName'].setValue(this.person.lastName);
    this.formEdit.controls['age'].setValue(this.person.age);
    this.formEdit.controls['profession'].setValue(this.person.profession);
    this.formEdit.controls['origin'].setValue(this.person.origin);
    this.formEdit.controls['presentation'].setValue(this.person.presentation);
    this.formEdit.controls['professional_photo'].setValue(this.person.professional_photo);
    console.log(this.person)
    }, error => {
      console.log(error)
    })
    
  }

  public editPresentation(){
    this.integration.updatePerson(this.idPers, this.formEdit.value).subscribe(res=>{
      console.log(res)
    }, error =>{
      console.error(error)
    })
  }
  

}
