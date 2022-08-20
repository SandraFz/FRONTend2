import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  formRegister: FormGroup;

  constructor(private login: LoginService, private router: Router) { 
    this.formLogin=new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })

    this.formRegister=new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  singin(){
    this.login.login(this.formLogin.value).then(res=> {
      console.log(res);
      this.router.navigate(['/admin']);
    }).catch(error =>{console.log(error)})
  }

  register(){
    this.login.register(this.formRegister.value).then(res=>{
      console.log(res);
    }).catch(error=>console.log(error));
  }

}
