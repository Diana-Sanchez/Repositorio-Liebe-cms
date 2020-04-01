import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-acceso-administrador',
  templateUrl: './acceso-administrador.component.html',
  styleUrls: ['./acceso-administrador.component.css']
})
export class AccesoAdministradorComponent implements OnInit {
  // Creación de instancia tipo FormGroup para accesos usuarios administradores
  accesoUsuarioAdmin = new FormGroup({
    nombreDeAdmin:new FormControl('', [Validators.required, Validators.maxLength(8)]),
    passwordDeAdmin:new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  });
  usuariosAdminIngresados: any = [];

  get nombreDeAdmin(){
    return this.accesoUsuarioAdmin.get('nombreDeAdmin');
  };

  get passwordDeAdmin(){
    return this.accesoUsuarioAdmin.get('passwordDeAdmin');
  };


  guardarAccesoUsuarioAdmin(){
    
    this.usuariosAdminIngresados.push(this.accesoUsuarioAdmin.value);
    console.log(this.usuariosAdminIngresados);
    console.log('Fomulario válido:', this.accesoUsuarioAdmin.valid );
    this.accesoUsuarioAdmin.reset(); 
  };
  constructor() { }

  ngOnInit(): void {
  }

}
