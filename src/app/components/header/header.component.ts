import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginServ: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginServ.signOut().then(()=>{
      this.router.navigate(['/login']);
    }).catch(error=>console.log(error));
  }

}
