import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  skillList: Array<any> = [
    "Informatica",
    "Software",
    "Hardware",
    "Programacion",
  ];
  skillItems: Array<any> = [
    [
      { "name": "Conceptos", "level":"80"},
      { "name": "Manejo de redes", "level":"90"},
    ],
    [
      { "name": "VSC", "level":"30"},
      { "name": "NetBeans", "level":"20"},
    ],
    [
      { "name": "Conceptos", "level":"70"},
      { "name": "Componentes", "level":"80"},
    ],
    [
      { "name": "C++", "level":"85"},
      { "name": "Haskell", "level":"80"},
      { "name": "Prolog", "level":"50"},
      { "name": "Java", "level":"65"},
      { "name": "HTML", "level":"75"},
      { "name": "CSS", "level":"50"},
      { "name": "Angular", "level":"40"},
      { "name": "JavaScript", "level":"50"},
      { "name": "TypeScript", "level":"50"},
      { "name": "Bootstrap", "level":"80"},
    ],
  ];
}
