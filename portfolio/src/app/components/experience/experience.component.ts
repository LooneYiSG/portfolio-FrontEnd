import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Conocimiento } from 'src/app/entities/conocimiento';
import { Habilidad } from 'src/app/entities/habilidad';
import { LoginService } from 'src/app/services/auth/login.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  userLoginOn: boolean = false;
  option: number = -1;
  action: number = -1;
  skillsList: Habilidad[] = [];
  Skill: Habilidad = {
    id: 0,
    nombre: "",
    conocimientos: []
  }

  skillForm = this.formBuilder.group({
    nombre: ['', [Validators.required]],
  })

  constructor(private SkillService: SkillService, private formBuilder: FormBuilder, private loginService: LoginService){}

  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.getSkills();
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

  }

  getSkills(): void {
    this.SkillService.getSkillsList().subscribe(skillsList => this.skillsList = skillsList);
  }

  addSkill(): void{
    if(this.skillForm.valid){
      this.SkillService.addSkill(this.Skill as Habilidad).subscribe((skill: Habilidad) =>{
        this.skillsList.push(skill);
        document.getElementById("close_FormSkill")?.click();
        this.skillForm.reset();
      });
    }else{
      this.skillForm.markAllAsTouched();
    }
  }

  delSkill(id: number):void{
    this.SkillService.delSkill(id).subscribe();
    setTimeout(() => {this.getSkills();},100);
  }

  editSkill(){
    if(this.skillForm.valid){
      this.SkillService.editSkill(this.Skill as Habilidad).subscribe(() =>{
        this.getSkills();
        document.getElementById("close_FormSkill")?.click();
        this.skillForm.reset();
      });
      console.log("Editaste:" + this.Skill);
    }else{
      this.skillForm.markAllAsTouched();
    }
  }

  addRow(){
    const conocimiento:Conocimiento = {
      id: this.Skill.conocimientos.length+1,
      nombre: "New row",
      nivel: "0",
    }
    this.Skill.conocimientos.push(conocimiento);
  }

  delRow(index:number){
    this.Skill.conocimientos.splice(index,1);
  }

  selectedMenu(valor:string){
    this.option = parseInt(valor);
    if (parseInt(valor) != -1){
      this.Skill = JSON.parse(JSON.stringify(this.skillsList[this.option]));
    }
    console.log("Seleccion:"+valor);
  }

  clearSkill(){
    this.Skill.id = 0;
    this.Skill.nombre = "";
    this.Skill.conocimientos = [];
    this.option = -1;
    this.action = -1;
    this.skillForm.reset();
    console.log("Se acaba de limpiar la habilidad");
  }

  changeAction(action: number){
    this.clearSkill();
    this.action = action;
  }

  get nombre(){
    return this.skillForm.controls.nombre;
  }

}
