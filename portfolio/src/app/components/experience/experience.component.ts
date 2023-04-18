import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/entities/habilidad';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  skillsList: Habilidad[] = [];

  constructor(private SkillService: SkillService){}

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.SkillService.getSkillsList().subscribe(skillsList => this.skillsList = skillsList);
  }
}
