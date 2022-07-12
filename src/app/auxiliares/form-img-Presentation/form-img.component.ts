import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Person } from 'src/app/model/Person';
import { IntegrationService } from 'src/app/servicios/integration.service';

@Component({
  selector: 'app-form-img',
  templateUrl: './form-img.component.html',
  styleUrls: ['./form-img.component.css']
})
export class FormImgComponent implements OnInit {

  person!:Person;
  formImg = new FormControl('');
  id='';

  constructor(private integration:IntegrationService) { }

  ngOnInit(): void {
    this.getPerson();
    //this.getPerson1(1);//Solo de prueba. Eliminar.
  }

  public getPerson() {
    this.integration.getPerson().subscribe(res => {
      console.log("El objeto en fomr-img-componente está aquí: "+res);
      this.person=res;
    }, error => {
      console.log("Problemas con la entidad en el formulario.")
    })
  }
/*
  public updatePerson(){
    let linkImg = this.formImg.value
    let person = {
      id = this.getPerson().id;
    }
    this.integration.updatePerson(linkImg).subscribe(()=>{
      this.getPerson();
      this.formImg.reset('');
    }, error => {
      console.log("Error al ejecutar udatePerson()" +error)
    })
  }
*/

/*
  public UpdatePerson(id: number) {
    this.integration.getPerson(id).subscribe(res => {
      this.formImg.patchValue({
        this.person.professional_photo
      })
    }, error=>{
      console.log("Error al ejecutar getPerson()")
    } )
  }*/

 /* public showImg(elementId: string):HTMLElement {
    document.getElementById(elementId)?.getAttribute =this.formImg.value;
    //?.setAttribute(src, value: string).this.formImg;
    //.getAttribute(attr: string).this.formImg
  }*/

}
