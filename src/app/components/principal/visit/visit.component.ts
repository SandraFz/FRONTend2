import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  formReg: FormGroup;

  constructor(private login: LoginService) {
    this.formReg=new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.login.register(this.formReg.value).then(res=>{
      console.log(res);
    }).catch(error=>console.log(error));
  }

}
