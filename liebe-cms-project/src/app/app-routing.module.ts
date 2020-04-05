import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { BodyLandingComponent } from './body-landing/body-landing.component';
import { AdminPrincipalComponent } from './Administracion/admin-principal/admin-principal.component';
import { InicioComponent } from './Administracion/inicio/inicio.component';
import { UsuariosComponent } from './Administracion/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { PaginasComponent } from './Administracion/paginas/paginas.component';
import { HomePrincipalComponent } from './Home/home-principal/home-principal.component';
import { RecursosComponent } from './Administracion/recursos/recursos.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { AccesoAdministradorComponent } from './Administracion/acceso-administrador/acceso-administrador.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { PagesComponent } from './Administracion/pages/pages.component';
import { EntradasPostComponent } from './Administracion/entradas-post/entradas-post.component';
import { ComentariosComponent } from './Administracion/comentarios/comentarios.component';




const routes: Routes = [
  {
    path: 'liebe',
    component: HomePrincipalComponent,
    children:[
      {
        path: '',
        component: BodyLandingComponent
      },
      {
        path: 'acceso',
        component: AccesoComponent
      },
  
      {
        path: 'inicio',
        component: BodyLandingComponent
      },
      {
        path: 'registro-usuario',
        component: RegistroUsuarioComponent
      },
      {
        path: 'registro-admin',
        component: RegistroAdministradorComponent
      }
    ]
  },
  {
    path: 'admin',
    component: HomePrincipalComponent,
    children: [
      {
        path: '',
        component: AccesoAdministradorComponent, 
      }
    ]
  },
  {
    path: 'admin',
    component: AdminPrincipalComponent,
    children:[
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'paginas',
        component: PaginasComponent
      },
      {
        path: 'pages',
        component: PagesComponent
      },
      {
        path: 'home',
        component: InicioComponent,
      },
      {
        path:'nuevo-usuario',
        component: NuevoUsuarioComponent
      },
      {
        path: 'recursos',
        component: RecursosComponent
      },
      {
        path: 'entradas',
        component: EntradasPostComponent
      },
      {
        path: 'comentarios',
        component: ComentariosComponent
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
