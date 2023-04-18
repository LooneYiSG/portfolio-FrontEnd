import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/entities/educacion';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  
  eduList: Educacion[] = [];

  constructor(private EducationService:EducationService){}

  ngOnInit(): void {
    this.getInstitutionList();
  }

  getInstitutionList(): void{
    this.EducationService.getInstituciones().subscribe(eduList => this.eduList = eduList );
  }

}
