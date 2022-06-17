import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/principal/admin/admin.component';
import { VisitComponent } from './components/principal/visit/visit.component';
import { HeaderComponent } from './components/header/header.component';
import { FormImgComponent } from './components/form-img/form-img.component';
import { ButtonEditComponent } from './components/button-edit/button-edit';
import { FormTextComponent } from './components/form-text/form-text.component';



@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    AdminComponent,
    VisitComponent,
    ButtonEditComponent,
    HeaderComponent,
    FormImgComponent,
    FormTextComponent,
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
