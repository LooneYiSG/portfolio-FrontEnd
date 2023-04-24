import { Injectable } from '@angular/core';
import { Habilidad } from '../entities/habilidad';
import { HABILIDADES } from 'src/assets/files/mock-skills';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //skillsList: Habilidad[] = HABILIDADES;
  private httpURL = 'http://localhost:8080/api/'

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSkillsList():Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(this.httpURL + "list/skill").pipe(
      catchError(this.handleError<Habilidad[]>('getSkillsList', []))
    );
  }

  addSkill(Skill: Habilidad){
    return this.http.post<Habilidad>(this.httpURL + "new/skill", Skill, this.httpOptions).pipe(
      //tap((newSkill: Habilidad) => console.log(newSkill.nombre)),
      catchError(this.handleError<Habilidad>('addEducation'))
    );
  }

  delSkill(id:number):Observable<Habilidad>{
    return this.http.delete<Habilidad>(this.httpURL + `delete/skill/${id}`, this.httpOptions).pipe(
      //tap(() => console.log(`Deleted skill: ${id}`)),
      catchError(this.handleError<Habilidad>('delSkill'))
    );
  }

  editSkill(Skill: Habilidad){
    return this.http.put<Habilidad>(this.httpURL + "modify/skill", Skill, this.httpOptions).pipe(
      //tap((newSkill: Habilidad) => console.log(newSkill.nombre)),
      catchError(this.handleError<Habilidad>('editSkill'))
    );
  }

}
