import { Injectable } from '@angular/core';
import { PROYECTOS } from 'src/assets/files/mock-projects';
import { Proyecto } from '../entities/proyecto';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  //projectList: Proyecto[] = PROYECTOS;
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

  getProjectList():Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.httpURL + "list/project").pipe(
      catchError(this.handleError<Proyecto[]>('getProjectList', []))
    );
  }

  addProject(Project: Proyecto){
    return this.http.post<Proyecto>(this.httpURL + "new/project", Project, this.httpOptions).pipe(
      //tap((newProject: Proyecto) => console.log(newProject.nombre)),
      catchError(this.handleError<Proyecto>('addProject'))
    );
  }

  delProject(id:number):Observable<Proyecto>{
    return this.http.delete<Proyecto>(this.httpURL + `delete/project/${id}`, this.httpOptions).pipe(
      //tap(() => console.log(`Deleted skill: ${id}`)),
      catchError(this.handleError<Proyecto>('delProject'))
    );
  }

  editProject(Project: Proyecto){
    return this.http.put<Proyecto>(this.httpURL + "modify/project", Project, this.httpOptions).pipe(
      //tap((newProject: Proyecto) => console.log(newProject.nombre)),
      catchError(this.handleError<Proyecto>('editProject'))
    );
  }
  
}
