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

  socMedia:Contact[]=[];
  socMed!:Contact;
  idSM!:number;
  formEditSM:FormGroup;

  constructor(private servicio:FooterService, private fb:FormBuilder) {

    this.formEditSM = this.fb.group({
      id: new FormControl(""),
      name_SM: new FormControl(""),
      logo_SM: new FormControl(""),
      link_SM: new FormControl(""),
    })
   }

  ngOnInit(): void {
    this.socMedList();
    this.currentDate;
    console.log("currentDate");
    console.log(this.currentDate);
  }

  public socMedList(){
    this.servicio.socMedList().subscribe(res => {
      this.socMedia = res;
    }, error => {
      console.log(error);
    })
  }

  public deleteSM(id:number){
    this.servicio.deleteContact(id).subscribe(() => {
      window.location.reload()
    }, error => {
      console.log(error);
    })
  }

  public getSMById(id:number){
    this.servicio.getContact(id).subscribe(res=>{
      this.socMed = res
      this.formEditSM.controls['id'].setValue(this.socMed.id);
      this.formEditSM.controls['name_SM'].setValue(this.socMed.name_SM);
      this.formEditSM.controls['link_SM'].setValue(this.socMed.logo_SM);
      this.formEditSM.controls['link_SM'].setValue(this.socMed.link_SM);
    }, error => {
      console.log(error)
    })
  }

  

  public editSM(id:number){
    this.servicio.updateSM(id, this.formEditSM.value).subscribe((res) => {
      window.location.reload()
    }, error => {
      console.log(error)
    })
  }

  public currentDate = new Date().toLocaleDateString();
  
  

}
