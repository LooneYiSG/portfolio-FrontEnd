import { Component, OnDestroy, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/entities/proyecto';
import { LoginService } from 'src/app/services/auth/login.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  userLoginOn: boolean = false;
  option: number = -1;
  action: number = -1;
  projectList: Proyecto[] = [];
  Project: Proyecto = {
    id: 0,
    nombre: "",
    descripcion: "",
    foto: "",
  }

  constructor(private ProjectService: ProjectService, private loginService: LoginService){}

  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.getProjectList();
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });
  }

  getProjectList(): void {
    this.ProjectService.getProjectList().subscribe(projectList => this.projectList = projectList);
  }

  addProject():void {
    this.ProjectService.addProject(this.Project as Proyecto).subscribe((project: Proyecto) =>{
      this.projectList.push(project);
    });
  }

  delProject(id: number):void {
    this.ProjectService.delProject(id).subscribe();
    setTimeout(() => {this.getProjectList();},100);
  }

  editProject():void {
    this.ProjectService.editProject(this.Project as Proyecto).subscribe(() =>{
      this.getProjectList();
    });
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
