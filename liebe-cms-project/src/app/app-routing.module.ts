import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { BodyLandingComponent } from './body-landing/body-landing.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminPrincipalComponent } from './Administracion/admin-principal/admin-principal.component';
import { InicioComponent } from './Administracion/inicio/inicio.component';
import { UsuariosComponent } from './Administracion/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EdicionUsuariosComponent } from './Administracion/edicion-usuarios/edicion-usuarios.component';
import { PaginasComponent } from './Administracion/paginas/paginas.component';
import { HomePrincipalComponent } from './Home/home-principal/home-principal.component';
import { RecursosComponent } from './Administracion/recursos/recursos.component';
import { NuevaPaginaComponent } from './Administracion/nueva-pagina/nueva-pagina.component';
import { EntradasComponent } from './Administracion/entradas/entradas.component';




const routes: Routes = [
  {
    path: 'liebe',
    component: HomePrincipalComponent,
    children: [
      {
        path:'',
        component: BodyLandingComponent
      },
      {
        path: 'admin',
        component: AccesoComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: 'inicio',
        component: BodyLandingComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminPrincipalComponent,
    children:[
      {
        path: 'home',
        component: InicioComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'paginas',
        component: PaginasComponent
      },
      {
        path: 'nueva-pagina',
        component: NuevaPaginaComponent
      },
      {
        path: 'home',
        component: InicioComponent 
      },
      {
        path:'nuevo-usuario',
        component: NuevoUsuarioComponent
      },
      {
        path: 'edicion-usuario',
        component: EdicionUsuariosComponent
      },
      {
        path: 'recursos',
        component: RecursosComponent
      },
      {
        path: 'entradas',
        component: EntradasComponent
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
