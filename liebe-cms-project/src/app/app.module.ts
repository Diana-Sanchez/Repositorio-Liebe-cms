import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyLandingComponent } from './body-landing/body-landing.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { AccesoComponent } from './acceso/acceso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyLandingComponent,
    PiePaginaComponent,
    AccesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
