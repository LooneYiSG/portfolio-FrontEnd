import { Injectable } from '@angular/core';
import { Habilidad } from '../entities/habilidad';
import { HABILIDADES } from 'src/assets/files/mock-skills';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //skillsList: Habilidad[] = HABILIDADES;

  constructor() { }

  getSkillsList():Observable<Habilidad[]> {
    const skillsList = of(HABILIDADES);
    return skillsList;
  }
}
