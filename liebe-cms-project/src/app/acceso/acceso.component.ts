import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {
  // Creando instancia del tipo FormGroup para el acceso de usuarios normales.
  acessoUsuarioNormal = new FormGroup({
    nombreDeUsuario:new FormControl('', [Validators.required, Validators.maxLength(8)]),
    passwordDeUsuario:new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  });

  usuariosNormalesIngresados: any = [];

  get nombreDeUsuario(){
    return this.acessoUsuarioNormal.get('nombreDeUsuario');
  };

  get passwordDeUsuario(){
    return this.acessoUsuarioNormal.get('passwordDeUsuario');
  };


  guardarAccesoUsuarioNormal(){
    
    this.usuariosNormalesIngresados.push(this.acessoUsuarioNormal.value);
    console.log(this.usuariosNormalesIngresados);
    console.log('Fomulario válido:', this.acessoUsuarioNormal.valid );
    this.acessoUsuarioNormal.reset(); 
  };
  constructor() { }

  ngOnInit(): void {
  }

}
