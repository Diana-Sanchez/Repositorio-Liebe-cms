import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  // Creación de instancia tipo FormGroup para la creación de nuevas páginas.
  myDate = new Date();
  usuario = new FormGroup({
    fecha: new FormControl(this.myDate),
    nombre:new FormControl('', [Validators.required, Validators.maxLength(20)]),
    apellido: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    correo: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]),
    rol:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]),   
});

usuarios:any = [{
  nombre:'Diana Sánchez',
  rol:'Administrador'
}];
get fecha(){
  return this.usuario.get('fecha');
};
get nombre(){
  return this.usuario.get('nombre');
};
get apellido(){
  return this.usuario.get('apellido');
};
get correo(){
  return this.usuario.get('correo');
};
get rol(){
  return this.usuario.get('rol');
};
get password(){
  return this.usuario.get('password');
};
backendHost:String='http://localhost:8888';
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  guardarUsuario(){
    console.log('Formulario válido:', this.usuario.valid);
    this.httpClient.post(`${this.backendHost}/usuarios`, this.usuario.value)
    .subscribe((res:any)=>{
      console.log(res);
      this.usuarios.push(res);
    });
  }

}
