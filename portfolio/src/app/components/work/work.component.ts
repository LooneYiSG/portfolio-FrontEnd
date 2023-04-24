import { Component, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/entities/exp-laboral';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  
  option: number = -1;
  action: number = -1;
  workList: ExpLaboral[] = [];
  Work: ExpLaboral = {
    id: 0,
    institucion: "",
    cargo: "",
    fecha_desde: "",
    fecha_hasta: "",
    descripcion: ""
  }

  constructor(private WorkService: WorkService){}

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList():void{
    this.WorkService.getWorkList().subscribe(workList => this.workList = workList);
  }

  addWork(): void{
    this.WorkService.addWork(this.Work as ExpLaboral).subscribe();
    setTimeout(() => {this.getWorkList();},100);
  }

  deleteWork(id: number){
    this.WorkService.delWork(id).subscribe();
    setTimeout(() => {this.getWorkList();},100);
  }

  editWork(): void{
    this.addWork();
    console.log("EDITASTE:" + this.Work);
  }

  selectedMenu(valor:string){
    this.option = parseInt(valor);
    if (parseInt(valor) != -1){
      this.Work = JSON.parse(JSON.stringify(this.workList[this.option]));
    }
    console.log("Seleccion:"+valor);
  }

  clearWork(){
    this.Work.id = 0,
    this.Work.institucion = "";
    this.Work.cargo = "";
    this.Work.fecha_desde = "";
    this.Work.fecha_hasta = "";
    this.Work.descripcion = "";
    this.option = -1;
    this.action = -1;
    console.log("Se acaba de limpiar la institucion");
  }

  changeAction(action: number){
    this.clearWork();
    this.action = action;
  }

}
