import { Injectable } from '@angular/core';
import { ExpLaboral } from '../entities/exp-laboral';
import { TRABAJOS } from 'src/assets/files/mock-work';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  //workList: ExpLaboral[] = TRABAJOS;

  constructor() { }

  getWorkList():Observable<ExpLaboral[]> {
    const workList = of(TRABAJOS);
    return workList;
  }
}
