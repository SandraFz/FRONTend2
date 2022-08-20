import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { VisitComponent } from './components/principal/visit/visit.component';
import { AdminComponent } from './components/principal/admin/admin.component';
import { EditProjectComponent } from './auxiliares/form-edit-project/form-edit-project.component';
import { LoginComponent } from './auxiliares/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path:'', redirectTo:'/admin', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'admin', 
  component:AdminComponent,
  ...canActivate(()=>redirectUnauthorizedTo(['/login']))
},
  {path: 'editarProy/:id', component:EditProjectComponent}
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
