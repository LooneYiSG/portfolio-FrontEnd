import { Injectable } from '@angular/core';
import { ExpLaboral } from '../entities/exp-laboral';
import { TRABAJOS } from 'src/assets/files/mock-work';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  //workList: ExpLaboral[] = TRABAJOS;
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

  getWorkList():Observable<ExpLaboral[]>{
    return this.http.get<ExpLaboral[]>(this.httpURL + "list/work").pipe(
      catchError(this.handleError<ExpLaboral[]>('getInstituciones', []))
    );
  }

  addWork(addWork: ExpLaboral){
    return this.http.post<ExpLaboral>(this.httpURL + "new/work", addWork, this.httpOptions).pipe(
      //tap((newWork: ExpLaboral) => console.log(newWork.institucion)),
      catchError(this.handleError<ExpLaboral>('addWork'))
    );
  }

  delWork(id:number):Observable<ExpLaboral>{
    return this.http.delete<ExpLaboral>(this.httpURL + `delete/work/${id}`, this.httpOptions).pipe(
      //tap(() => console.log(`Deleted work: ${id}`)),
      catchError(this.handleError<ExpLaboral>('delWork'))
    );
  }

  editWork(addWork: ExpLaboral){
    return this.http.put<ExpLaboral>(this.httpURL + "modify/work", addWork, this.httpOptions).pipe(
      //tap((newWork: ExpLaboral) => console.log(newWork.institucion)),
      catchError(this.handleError<ExpLaboral>('editWork'))
    );
  }

}
