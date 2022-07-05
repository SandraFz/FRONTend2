import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntegrationService } from 'src/app/servicios/integration.service';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent implements OnInit {

  textPresentation = new FormControl('');
  id:any = '';

  constructor(private integration:IntegrationService) { }

  ngOnInit(): void {
    this.getPresentation();
  }

  public getPresentation(){
    this.integration.getPerson().subscribe(res => { 
      const  {id_person, name, lastName, age, profession, origin, presentation, professional_photo } = res
      this.id = id_person;
      this.textPresentation.setValue({presentation})
    })

    
  }

}
