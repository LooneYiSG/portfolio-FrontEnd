import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entities/proyecto';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsList: Proyecto[] = [];

  constructor(private ProjectService: ProjectService){}

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList(): void {
    this.projectsList = this.ProjectService.getProjectList();
  }

}
