import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyLandingComponent } from './body-landing/body-landing.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { AccesoComponent } from './acceso/acceso.component';
import { AdminPrincipalComponent } from './Administracion/admin-principal/admin-principal.component';
import { PanelComponent } from './Administracion/panel/panel.component';
import { InicioComponent } from './Administracion/inicio/inicio.component';
import { UsuariosComponent } from './Administracion/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EdicionUsuariosComponent } from './Administracion/edicion-usuarios/edicion-usuarios.component';
import { PaginasComponent } from './Administracion/paginas/paginas.component';
import { NuevaPaginaComponent } from './Administracion/nueva-pagina/nueva-pagina.component';
import { HomePrincipalComponent } from './Home/home-principal/home-principal.component';
import { FooterAdminComponent } from './Administracion/footer-admin/footer-admin.component';
import { RecursosComponent } from './Administracion/recursos/recursos.component';
import { EntradasComponent } from './Administracion/entradas/entradas.component';
import { NuevaEntradaComponent } from './Administracion/nueva-entrada/nueva-entrada.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { DashboardComponent } from './Administracion/dashboard/dashboard.component';
import { AccesoAdministradorComponent } from './Administracion/acceso-administrador/acceso-administrador.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { PagesComponent } from './Administracion/pages/pages.component';
import { CuentaUsuarioComponent } from './Administracion/cuenta-usuario/cuenta-usuario.component';
import { EntradasPostComponent } from './Administracion/entradas-post/entradas-post.component';
import { ComentariosComponent } from './Administracion/comentarios/comentarios.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyLandingComponent,
    PiePaginaComponent,
    AccesoComponent,
    AdminPrincipalComponent,
    PanelComponent,
    InicioComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    EdicionUsuariosComponent,
    PaginasComponent,
    NuevaPaginaComponent,
    HomePrincipalComponent,
    FooterAdminComponent,
    RecursosComponent,
    EntradasComponent,
    NuevaEntradaComponent,
    RegistroUsuarioComponent,
    DashboardComponent,
    AccesoAdministradorComponent,
    RegistroAdministradorComponent,
    PagesComponent,
    CuentaUsuarioComponent,
    EntradasPostComponent,
    ComentariosComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
