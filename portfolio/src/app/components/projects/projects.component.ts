import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  projectForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    foto: ['', [Validators.required]],
  })

  constructor(private ProjectService: ProjectService, private formBuilder: FormBuilder, private loginService: LoginService){}

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
    if(this.projectForm.valid){
      this.ProjectService.addProject(this.Project as Proyecto).subscribe((project: Proyecto) =>{
        this.projectList.push(project);
        document.getElementById("close_FormProject")?.click();
        this.projectForm.reset();
      });
    }else{
      this.projectForm.markAllAsTouched();
    }
  }

  delProject(id: number):void {
    this.ProjectService.delProject(id).subscribe();
    setTimeout(() => {this.getProjectList();},100);
  }

  editProject():void {
    if(this.projectForm.valid){
      this.ProjectService.editProject(this.Project as Proyecto).subscribe(() =>{
        this.getProjectList();
        document.getElementById("close_FormProject")?.click();
        this.projectForm.reset();
      });
      console.log("Editaste:" + this.Project);
    }else{
      this.projectForm.markAllAsTouched();
    }
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
    this.option = -1;
    this.action = -1;
    this.projectForm.reset();
    console.log("Se acaba de limpiar el proyecto");
  }

  changeAction(action: number){
    this.clearProject();
    this.action = action;
  }

  get nombre(){
    return this.projectForm.controls.nombre;
  }
  get descripcion(){
    return this.projectForm.controls.descripcion;
  }
  get foto(){
    return this.projectForm.controls.foto;
  }

}
