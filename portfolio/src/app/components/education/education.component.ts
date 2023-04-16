import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent {
  eduList: Array<any> = [
    ["Escuela Publica Monteagudo","descriptions","https://i.imgur.com/eACn3Nb.jpeg"],
    ["Instituto Dr. Carlos Pellegrini - Nivel Primario","descriptions","https://i.imgur.com/jNNBvoS.jpeg"],
    ["Instituto Dr. Carlos Pellegrini - Nivel Secundario","descriptions","https://i.imgur.com/GLjSdeH.jpeg"],
    ["Universidad Tecnológica Nacional – Facultad Regional de Tucumán","descriptions","https://i.imgur.com/dAvWkN8.jpeg"]
  ]

}
