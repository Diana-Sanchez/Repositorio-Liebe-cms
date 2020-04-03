import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  // Creación de instancia tipo FormGroup para la creación de nuevas páginas.
  pagina = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.maxLength(10)]),
    descripcion:new FormControl('', [Validators.required, Validators.maxLength(30)]),
    nombreMenu:new FormControl('', [Validators.required, Validators.maxLength(10)]),
    palabrasClaves:new FormControl('', [Validators.required, Validators.maxLength(30)]),
    paginaPadre:new FormControl('', [Validators.required, Validators.maxLength(2)]),
    estado:new FormControl('', [Validators.required]),
    incluirEncabezado:new FormControl('', [Validators.required, Validators.maxLength(2)]),
    incluirMenu:new FormControl('', [Validators.required, Validators.maxLength(2)]),
    incluirPie:new FormControl('', [Validators.required, Validators.maxLength(2)]),
    incluirB:new FormControl('', [Validators.required, Validators.maxLength(2)])
  });

  paginas:any = [];

  get nombre(){
    return this.pagina.get('nombre');
  };
  get descripcion(){
    return this.pagina.get('descripcion');
  };
  get nombreMenu(){
    return this.pagina.get('nombreMenu');
  };
  get palabrasClaves(){
    return this.pagina.get('palabrasClaves');
  };
  get paginaPadre(){
    return this.pagina.get('paginaPadre');
  };
  get estado(){
    return this.pagina.get('estado');
  };
  get incluirEncabezado(){
    return this.pagina.get('incluirEncabezado');
  };
  get incluirMenu(){
    return this.pagina.get('incluirMenu');
  };
  get incluirPie(){
    return this.pagina.get('incluirPie');
  };
  get incluirB(){
    return this.pagina.get('incluirB'); 
  };

  constructor() { }

  ngOnInit(): void {
  }
  public Editor = ClassicEditor;

  guardarPagina(){
    
    this.paginas.push(this.pagina.value);
    console.log(this.paginas);
    console.log('Fomulario válido:', this.pagina.valid );
    this.pagina.reset(); 
    
  };
  
}
