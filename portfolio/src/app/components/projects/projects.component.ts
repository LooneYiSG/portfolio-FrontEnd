import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsList: Array<any> = [
    {"id": "1", "name": "Project Marketplace", "description": "Project Description", "img":"https://i.imgur.com/qyRiisO.jpeg"},
    {"id": "2", "name": "Project Microsoft", "description": "Project Description", "img":"https://i.imgur.com/qyRiisO.jpeg"},
    {"id": "3", "name": "Project Artificial Intelligence", "description": "Project Description", "img":"https://i.imgur.com/qyRiisO.jpeg"},
  ]
}
