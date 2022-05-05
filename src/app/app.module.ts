import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PresentationComponent } from './components/subComponents/presentation/presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/principal/admin/admin.component';
import { VisitComponent } from './components/principal/visit/visit.component';
import { Form1Component } from './components/subComponents/form1/form1.component';
import { HeaderComponent } from './components/subComponents/header/header.component';
import { Form2Component } from './components/subComponents/form2/form2.component';



@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    AdminComponent,
    VisitComponent,
    Form1Component,
    HeaderComponent,
    Form2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
