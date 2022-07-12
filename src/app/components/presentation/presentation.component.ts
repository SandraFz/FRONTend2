import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/Person';
import { IntegrationService} from '../../servicios/integration.service'

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

 // people:Person[]=[]; 
 id?:number;
person!:Person;

  constructor(private integration:IntegrationService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.getPerson();
   //this.integration.listaPersonas();
   

  }

  public getPerson(){
    this.integration.getPerson().subscribe(res => {
      console.log(res);
      this.person=res;
    }, error => {
      console.log(error);
    })
  }

  

}
