import { Component, OnInit } from '@angular/core';
import { Conocimiento } from 'src/app/entities/conocimiento';
import { Habilidad } from 'src/app/entities/habilidad';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  option: number = -1;
  action: number = -1;
  skillsList: Habilidad[] = [];
  Skill: Habilidad = {
    id: 0,
    nombre: "",
    conocimientos: []
  }

  constructor(private SkillService: SkillService){}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.SkillService.getSkillsList().subscribe(skillsList => this.skillsList = skillsList);
  }

  addSkill(): void{
    this.SkillService.addSkill(this.Skill as Habilidad).subscribe();
    setTimeout(() => {this.getSkills();},100);
  }

  delSkill(id: number):void{
    this.SkillService.delSkill(id).subscribe();
    setTimeout(() => {this.getSkills();},100);
  }

  editSkill(){
    this.addSkill();
    console.log("Editaste:" + this.Skill);
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
  }

  changeAction(action: number){
    this.clearSkill();
    this.action = action;
  }

}
