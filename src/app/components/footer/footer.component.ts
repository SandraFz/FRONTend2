import { Component, OnInit } from '@angular/core';

import { Contact } from 'src/app/model/contact';
import { FooterService } from 'src/app/servicios/footer.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socMedList:Contact[]=[];
  socMed!:Contact;
  idSM!:number;
  formEditSM:FormGroup;

  constructor(private servicio:FooterService, private fb:FormBuilder) {

    this.formEditSM = this.fb.group({
      
    })
   }

  ngOnInit(): void {
  }

}
