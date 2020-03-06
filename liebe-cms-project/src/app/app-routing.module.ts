import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { BodyLandingComponent } from './body-landing/body-landing.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminPrincipalComponent } from './Administracion/admin-principal/admin-principal.component';
import { InicioComponent } from './Administracion/inicio/inicio.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {
    path: '',
    component: BodyLandingComponent,
  },
  {
    path: 'acceso',
    component: AccesoComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'inicio',
    component: BodyLandingComponent
  },
  {
    path: 'admin',
    component: AdminPrincipalComponent,
    children:[
      {
        path: '',
        component: InicioComponent
      }
    ]
}
];


@NgModule({
  imports: 
  [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
