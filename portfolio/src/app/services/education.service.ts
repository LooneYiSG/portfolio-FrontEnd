import { Injectable } from '@angular/core';
import { Educacion } from '../entities/educacion';
import { INSTITUCIONES } from 'src/assets/files/mock-education';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  //InstitutionList:Educacion[] = INSTITUCIONES;

  constructor() { }

  getInstituciones():Observable<Educacion[]>{
    const InstitutionList = of(INSTITUCIONES)
    return InstitutionList;
  }

}
