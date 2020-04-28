import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  // Creando instacia del tipo FormGroup para usuarios normales.
  registroUsuarioNormal = new FormGroup({
    correo:new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]),
    nombreUsuario:new FormControl('', [Validators.required, Validators.maxLength(8)]),
    password:new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  })
  usuariosNormales:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  get correo(){
    return this.registroUsuarioNormal.get('correo');
  };

  get nombreUsuario(){
    return this.registroUsuarioNormal.get('nombreUsuario');
  };

  get password(){
    return this.registroUsuarioNormal.get('password');
  };
  guardarUsuarioNormal(){
    this.usuariosNormales.push(this.registroUsuarioNormal.value);
    console.log(this.usuariosNormales);
    console.log('Fomulario válido:', this.registroUsuarioNormal.valid );
    this.registroUsuarioNormal.reset();
  };

}
