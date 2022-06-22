import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Person } from 'src/app/model/person';
import { IntegrationService } from 'src/app/servicios/integration.service';

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.component.html',
  styleUrls: ['./form-presentation.component.css']
})
export class FormPresentationComponent implements OnInit {

  person!:Person;
  formPresentation = new FormGroup ({
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    profession: new FormControl(''),
    origin: new FormControl(''),
    presentation: new FormControl(''),
    professional_photo: new FormControl(''),
    //email: new FormControl('')
  })
  idPers:number = 1;

  constructor(private integration:IntegrationService) { }

  ngOnInit(): void {
    this.getPerson();
  }

  public getPerson() {
    this.integration.getPerson().subscribe(res=> {
      this.person=res;
    }, error => {
      console.log("Problemas con la entidad en el formulario.")
    })
  }

  /*public updatePerson(){
    let person = this.formPresentation.value
    this.integration.updatePerson(this.idPers, person).subscribe(res => {
      this.getPerson;
    }, error => {
      console.log("Problemas al ejecutar updatePerson");
    })
  }*/

}
