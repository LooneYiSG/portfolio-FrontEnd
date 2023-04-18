import { Injectable } from '@angular/core';
import { PROYECTOS } from 'src/assets/files/mock-projects';
import { Proyecto } from '../entities/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: Proyecto[] = PROYECTOS;

  constructor() { }

  getProjectList(): Proyecto[] {
    return this.projectList;
  }
  
}
