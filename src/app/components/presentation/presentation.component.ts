import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { IntegrationService} from '../../servicios/integration.service'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  people:Person[]=[]; 
  person!:Person;
  constructor(private integration:IntegrationService) { }

  ngOnInit(): void {
   this.getPerson();
   //this.integration.listaPersonas();
   

  }

  public getPerson(){
    this.integration.listaPersonas().subscribe(res => {
      console.log(res);
      this.person=res;
    }, error => {
      console.log("Este es el error: " +error);
    })
  }

}
