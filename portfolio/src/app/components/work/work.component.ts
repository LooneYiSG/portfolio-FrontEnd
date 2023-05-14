import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpLaboral } from 'src/app/entities/exp-laboral';
import { LoginService } from 'src/app/services/auth/login.service';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, OnDestroy {
  
  userLoginOn: boolean = false;
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

  workForm = this.formBuilder.group({
    institucion: ['', [Validators.required]],
    cargo: ['', [Validators.required]],
    fechad: ['', [Validators.required]],
    fechah: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  })

  constructor(private WorkService: WorkService, private formBuilder: FormBuilder, private loginService: LoginService){}

  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.getWorkList();
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });
  }

  getWorkList():void{
    this.WorkService.getWorkList().subscribe(workList => this.workList = workList);
  }

  addWork(): void{
    if(this.workForm.valid){
      this.WorkService.addWork(this.Work as ExpLaboral).subscribe((work: ExpLaboral) =>{
        this.workList.push(work);
        document.getElementById("close_FormWork")?.click();
        this.workForm.reset();
      });
    }else{
      this.workForm.markAllAsTouched();
    }
  }

  deleteWork(id: number){
    this.WorkService.delWork(id).subscribe();
    setTimeout(() => {this.getWorkList();},100);
  }

  editWork(): void{
    if(this.workForm.valid){
      this.WorkService.editWork(this.Work as ExpLaboral).subscribe(() =>{
        this.getWorkList();
        document.getElementById("close_FormWork")?.click();
        this.workForm.reset();
      });
      console.log("EDITASTE:" + this.Work);
    }else{
      this.workForm.markAllAsTouched();
    }
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
    this.workForm.reset();
    console.log("Se acaba de limpiar la institucion");
  }

  changeAction(action: number){
    this.clearWork();
    this.action = action;
  }

  get institucion(){
    return this.workForm.controls.institucion;
  }
  get cargo(){
    return this.workForm.controls.cargo;
  }
  get fechad(){
    return this.workForm.controls.fechad;
  }
  get fechah(){
    return this.workForm.controls.fechah;
  }
  get descripcion(){
    return this.workForm.controls.descripcion;
  }

}
