import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../entities/usuario';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = 'https://portfolio-backend-tgyh.onrender.com/api/';

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


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

  getUserList():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.userURL+"list/user").pipe(
      catchError(this.handleError<Usuario[]>('getUserList', []))
    );
  }

  editUser(User: Usuario){
    return this.http.put<Usuario>(this.userURL + "modify/user", User, this.httpOptions).pipe(
      tap((user: Usuario) => console.log(user.nombre)),
      catchError(this.handleError<Usuario>('editUser'))
    );
  }

}
