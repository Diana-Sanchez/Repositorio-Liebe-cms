import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  modal: NgbModalRef;
  cerrar(){
    this.modal.close();
  }

  // Creación de instancia tipo FormGroup para la creación de nuevas páginas.
  myDate = new Date(); // Instancia del objeto "myDate" para obtener la fecha actual de creación de cada usuario
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
//URL principal para consumir los web services del backend.
backendHost:String='http://localhost:8888';  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    // Consumo del recurso GET  para obtener todos los usuarios creados y almacenados en la base de datos.
    this.httpClient.get(`${this.backendHost}/usuarios`)
    .subscribe(res=>{
      this.usuarios = res;
      console.log(this.usuarios);
    });
  }
// Consumo del recurso POST para la creación de usuarios.
  guardarUsuario(){
    console.log('Formulario válido:', this.usuario.valid);
    this.httpClient.post(`${this.backendHost}/usuarios`, this.usuario.value)
    .subscribe((res:any)=>{
      console.log(res);
      this.usuarios.push(res);
      
    });
    this.cerrar();
  }

// Consumo del recurso DELETE para eliminar usuarios.
eliminar(id){
  console.log('Se eliminará el usuario con el id' + id);
  this.httpClient.delete(`${this.backendHost}/usuarios/${id}`)
  this.httpClient.delete(`${this.backendHost}/usuarios/${id}`)
    .subscribe((res:any)=>{
      console.log(res);
      if(res.ok==1){
        this.usuarios = this.usuarios.filter(item=>item._id!=id);
      }
    });
    this.cerrar();
};

}
