import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ExperienceComponent } from './components/experience/experience.component'; 
import { FormAddExperienceComponent } from './auxiliares/form-add-experience/form-add-experience.component';
import { FormAddImgExperienceComponent } from './auxiliares/form-add-img-experience/form-add-img-experience.component';
import { FormEditExperienceComponent } from './auxiliares/form-edit-experience/form-edit-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { FormAddSkillComponent } from './form-add-skill/form-add-skill.component'; 



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
    ExperienceComponent,
    FormAddExperienceComponent,
    FormAddImgExperienceComponent,
    FormEditExperienceComponent,
    SkillsComponent,
    FormAddSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
