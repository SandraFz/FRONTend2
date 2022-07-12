import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component'
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/principal/admin/admin.component';
import { VisitComponent } from './components/principal/visit/visit.component';
import { HeaderComponent } from './components/header/header.component';
import { FormImgComponent } from './auxiliares/form-img-Presentation/form-img.component';
import { ButtonEditComponent } from './auxiliares/button-edit/button-edit';
import { FormTextComponent } from './auxiliares/form-text-Presentation/form-text.component';
import { FormPresentationComponent } from './auxiliares/form-presentation/form-presentation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonAddComponent } from './auxiliares/button-add/button-add.component';
import { FormProyAddComponent } from './auxiliares/form-proy-add/form-proy-add.component';
import { ButtonDeleteComponent } from './auxiliares/button-delete/button-delete.component';
import { EditProjectComponent } from './auxiliares/form-edit-project/form-edit-project.component';



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
    FormPresentationComponent,
    ProjectsComponent,
    ButtonAddComponent,
    FormProyAddComponent,
    ButtonDeleteComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
