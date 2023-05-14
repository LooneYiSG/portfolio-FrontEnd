import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Educacion } from 'src/app/entities/educacion';
import { LoginService } from 'src/app/services/auth/login.service';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit, OnDestroy {
  
  userLoginOn: boolean = false;
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

  educationForm = this.formBuilder.group({
    foto: ['',[Validators.required]],
    institucion: ['', [Validators.required]],
    fechai: ['', [Validators.required]],
    fechae: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  })

  constructor(private EducationService:EducationService, private formBuilder: FormBuilder, private loginService: LoginService){}

  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.getInstitutionList();
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });
  }

  getInstitutionList(): void{
    this.EducationService.getInstituciones().subscribe(eduList => this.eduList = eduList);
  }

  addInstitution(): void{
    if(this.educationForm.valid){
      this.EducationService.addEducation(this.Institution as Educacion).subscribe((institucion: Educacion) =>{
        this.eduList.push(institucion);
        document.getElementById("close_FormEducation")?.click();
        this.educationForm.reset();
      });
    }else{
      this.educationForm.markAllAsTouched();
    }
    
  }

  deleteInstitution(id:number): void{
    this.EducationService.delEducation(id).subscribe();
    setTimeout(() => {this.getInstitutionList();},100);
  }

  editInstitution(): void{
    if(this.educationForm.valid){
      this.EducationService.editEducation(this.Institution as Educacion).subscribe(() =>{
        this.getInstitutionList();
        document.getElementById("close_FormEducation")?.click();
        this.educationForm.reset();
      });
      console.log("EDITASTE:" + this.Institution);
    }else{
      this.educationForm.markAllAsTouched();
    }
    
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
    this.educationForm.reset();
    console.log("Se acaba de limpiar la institucion");
  }

  changeAction(action: number){
    this.clearInstitution();
    this.action = action;
  }

  get foto(){
    return this.educationForm.controls.foto;
  }
  get institucion(){
    return this.educationForm.controls.institucion;
  }
  get fechai(){
    return this.educationForm.controls.fechai;
  }
  get fechae(){
    return this.educationForm.controls.fechae;
  }
  get descripcion(){
    return this.educationForm.controls.descripcion;
  }

}
