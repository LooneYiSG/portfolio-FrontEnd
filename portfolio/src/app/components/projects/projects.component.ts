import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entities/proyecto';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  option: number = -1;
  action: number = -1;
  projectList: Proyecto[] = [];
  Project: Proyecto = {
    id: 0,
    nombre: "",
    descripcion: "",
    foto: "",
  }

  constructor(private ProjectService: ProjectService){}

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList(): void {
    this.ProjectService.getProjectList().subscribe(projectList => this.projectList = projectList);
  }

  addProject():void {
    this.ProjectService.addProject(this.Project as Proyecto).subscribe();
    setTimeout(() => {this.getProjectList();},100);
  }

  delProject(id: number):void {
    this.ProjectService.delProject(id).subscribe();
    setTimeout(() => {this.getProjectList();},100);
  }

  editProject():void {
    this.addProject();
    console.log("Editaste:" + this.Project);
  }

  selectedMenu(valor:string){
    this.option = parseInt(valor);
    if (parseInt(valor) != -1){
      this.Project = JSON.parse(JSON.stringify(this.projectList[this.option]));
    }
    console.log("Seleccion:"+valor);
  }

  clearProject(){
    this.Project.id = 0;
    this.Project.nombre = "";
    this.Project.descripcion = "";
    this.Project.foto = "";
  }

  changeAction(action: number){
    this.clearProject();
    this.action = action;
  }

}
