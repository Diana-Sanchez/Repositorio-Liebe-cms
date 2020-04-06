import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entradas-post',
  templateUrl: './entradas-post.component.html',
  styleUrls: ['./entradas-post.component.css']
})
export class EntradasPostComponent implements OnInit {
  // Creación de instancia tipo FormGroup para la creación de nuevas entradas.
  post = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.maxLength(20)]),
    imagen:new FormControl('../../../assets/img/post.png', [Validators.required]),
    permiso:new FormControl('', [Validators.required, Validators.maxLength(2)])
  });

  posts:any = [];

  get nombre(){
    return this.post.get('nombre');
  };
  get imagen(){
    return this.post.get('imagen');
  };
  get permiso(){
    return this.post.get('permiso');
  };
  

  constructor() { }

  ngOnInit(): void {
  }

  public Editor = ClassicEditor;

  guardarPost(){
    
    this.posts.push(this.post.value);
    console.log(this.posts);
    console.log('Fomulario válido:', this.post.valid );
    this.post.reset(); 
  };
}
