import { Injectable } from '@angular/core';
import { Educacion } from '../entities/educacion';
import { INSTITUCIONES } from 'src/assets/files/mock-education';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  //educationList:Educacion[] = INSTITUCIONES;
  private httpURL = 'https://portfolio-backend-tgyh.onrender.com/api/'

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

  getInstituciones():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.httpURL + "list/education").pipe(
      catchError(this.handleError<Educacion[]>('getInstituciones', []))
    );
  }

  addEducation(addInstitution: Educacion){
    return this.http.post<Educacion>(this.httpURL + "new/education", addInstitution, this.httpOptions).pipe(
      //tap((newInstitution: Educacion) => console.log(newInstitution.institucion)),
      catchError(this.handleError<Educacion>('addEducation'))
    );
  }

  delEducation(id:number):Observable<Educacion>{
    return this.http.delete<Educacion>(this.httpURL + `delete/education/${id}`, this.httpOptions).pipe(
      //tap(() => console.log(`Deleted education: ${id}`)),
      catchError(this.handleError<Educacion>('delEducation'))
    );
  }

  editEducation(addInstitution: Educacion){
    return this.http.put<Educacion>(this.httpURL + "modify/education", addInstitution, this.httpOptions).pipe(
      //tap((newInstitution: Educacion) => console.log(newInstitution.institucion)),
      catchError(this.handleError<Educacion>('editEducation'))
    );
  }

}
