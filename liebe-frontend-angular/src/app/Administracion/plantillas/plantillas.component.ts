import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent implements OnInit {
  // Creación de instancia tipo FormGroup para la creación de nuevas páginas.
  plantilla = new FormGroup({
    nombre:new FormControl('', [Validators.required, Validators.maxLength(20)]),
    descripcion:new FormControl('', [Validators.required, Validators.maxLength(40)]),
    imagen:new FormControl('../../../assets/img/salud-2.jpg', [Validators.required]),
    textCkeditorPlantilla:new FormControl('¡Hello, Liebe!', [Validators.required]),
  });

  plantillas:any = [];

  get nombre(){
    return this.plantilla.get('nombre');
  };
  get descripcion(){
    return this.plantilla.get('descripcion');
  };
  get imagen(){
    return this.plantilla.get('imagen');
  };
  get textCkeditorPlantilla(){
    return this.plantilla.get('textCkeditorPlantilla');
  };

  constructor() { }

  ngOnInit(): void {
  }
  guardarPlantilla(){
    
    this.plantillas.push(this.plantilla.value);
    console.log(this.plantillas);
    console.log('Fomulario válido:', this.plantilla.valid );
    this.plantilla.reset(); 
  };
  

  public Editor = ClassicEditor;

}
