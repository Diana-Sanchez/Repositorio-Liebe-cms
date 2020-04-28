import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarios:any = [
    {
      nombrePost:'Tu nota de salud',
      autor:'Montserrat Nazaret',
      detalle:'La salud es más importante que cualquier otra cosa en la vida',
    },
    {
      nombrePost:'Secretos de belleza naturales',
      autor:'Óscar Sánchez',
      detalle:'Lo natural no siempre es tan efectivo como parece',
    },
    {
      nombrePost:'Veneno en la mente',
      autor:'Bessy Sánchez',
      detalle:'Nuestra mente en muchas ocasiones está más contaminada que cualquier otra cosa',
    },
    {
      nombrePost:'Nuestra piel',
      autor:'Héctor Bardales',
      detalle:'No sé qué hago aquí, Diana se está quedando sin ideas',
    },
    {
      nombrePost:'La vida es bella',
      autor:'Óscar Armando',
      detalle:'Ojalá y se mueran todos',
    }

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
