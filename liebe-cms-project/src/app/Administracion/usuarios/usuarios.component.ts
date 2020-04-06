import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  // Creación de instancia tipo FormGroup para la creación de nuevas páginas.
  usuario = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.maxLength(20)]),
    password:new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(8)]),
    rol:new FormControl('', [Validators.required]),
});

usuarios:any = [{
  nombre:'Diana Sánchez',
  rol:'admin'
}];

get nombre(){
  return this.usuario.get('nombre');
};

get password(){
  return this.usuario.get('password');
};
get rol(){
  return this.usuario.get('rol');
};
  constructor() { }

  ngOnInit(): void {
  }

  guardarUsuario(){
    
    this.usuarios.push(this.usuario.value);
    console.log(this.usuarios);
    console.log('Fomulario válido:', this.usuario.valid );
    this.usuario.reset(); 
    
  };

}
