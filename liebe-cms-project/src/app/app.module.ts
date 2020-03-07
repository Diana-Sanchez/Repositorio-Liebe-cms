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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
