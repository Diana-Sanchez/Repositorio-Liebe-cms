import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { BodyLandingComponent } from './body-landing/body-landing.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {
    path: 'acceso',
    component: AccesoComponent 
  },
  {
    path: '',
    component: BodyLandingComponent
  },
  {
    path:'inicio',
    component: BodyLandingComponent 
  },
  {
    path: 'registro',
    component: RegistroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
