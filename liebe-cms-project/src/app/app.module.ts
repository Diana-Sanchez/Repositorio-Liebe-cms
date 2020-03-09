import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyLandingComponent } from './body-landing/body-landing.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
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




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyLandingComponent,
    PiePaginaComponent,
    AccesoComponent,
    RegistroComponent,
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
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
