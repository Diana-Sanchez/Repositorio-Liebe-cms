import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosComponent } from '../Administracion/usuarios/usuarios.component';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {
  // Creando instancia del tipo FormGroup
  registrosUsuarios = new FormGroup({
    nombreProyecto:new FormControl('', [Validators.required, Validators.maxLength(15)]),
    descripcionProyecto:new FormControl('', [Validators.required, Validators.maxLength(50)]),
    correo:new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]),
    nombreUsuario:new FormControl('', [Validators.required, Validators.maxLength(8)]),
    password:new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  });

  
  usuarios:any = [];

  constructor() { }

  ngOnInit(): void {
  }
  get nombreProyecto(){
    return this.registrosUsuarios.get('nombreProyecto');
  };

  get descripcionProyecto(){
    return this.registrosUsuarios.get('descripcionProyecto');
  };
  get correo(){
    return this.registrosUsuarios.get('correo');
  };

  get nombreUsuario(){
    return this.registrosUsuarios.get('nombreUsuario');
  };

  get password(){
    return this.registrosUsuarios.get('password');
  };


  guardarRegistroUsuario(){
    
    this.usuarios.push(this.registrosUsuarios.value);
    console.log(this.usuarios);
    console.log('Fomulario válido:', this.registrosUsuarios.valid )
  };

  


  
  

}
