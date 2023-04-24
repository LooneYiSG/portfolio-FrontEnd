import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Educacion } from 'src/app/entities/educacion';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  
  option: number = -1;
  action: number = -1;
  eduList: Educacion[] = [];
  Institution: Educacion = {
    id: 0,
    institucion: "",
    fecha_ingreso: "",
    fecha_egreso: "",
    descripcion: "",
    foto: ""
  }

  constructor(private EducationService:EducationService){}

  ngOnInit(): void {
    this.getInstitutionList();
  }

  getInstitutionList(): void{
    this.EducationService.getInstituciones().subscribe(eduList => this.eduList = eduList);
  }

  addInstitution(): void{
    this.EducationService.addEducation(this.Institution as Educacion).subscribe();
    setTimeout(() => {this.getInstitutionList();},100);
  }

  deleteInstitution(id:number): void{
    this.EducationService.delEducation(id).subscribe();
    setTimeout(() => {this.getInstitutionList();},100);
  }

  editInstitution(): void{
    this.addInstitution();
    console.log("EDITASTE:" + this.Institution);
  }

  selectedMenu(valor:string){
    this.option = parseInt(valor);
    if (parseInt(valor) != -1){
      this.Institution = JSON.parse(JSON.stringify(this.eduList[this.option]));
    }
    console.log("Seleccion:"+valor);
  }

  clearInstitution(){
    this.Institution.id = 0,
    this.Institution.institucion = "";
    this.Institution.fecha_ingreso = "";
    this.Institution.fecha_egreso = "";
    this.Institution.descripcion = "";
    this.Institution.foto = "";
    this.option = -1;
    this.action = -1;
    console.log("Se acaba de limpiar la institucion");
  }

  changeAction(action: number){
    this.clearInstitution();
    this.action = action;
  }

}
