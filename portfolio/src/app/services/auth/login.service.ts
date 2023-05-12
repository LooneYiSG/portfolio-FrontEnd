import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, BehaviorSubject, tap } from 'rxjs';
import { UsuarioI } from 'src/app/entities/usuario-i';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<UsuarioI> = new BehaviorSubject<UsuarioI>({id:0, email:"",password:""});

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
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  login(credentials: LoginRequest):Observable<UsuarioI>{
    return this.http.post<UsuarioI>(this.httpURL + "login", credentials, this.httpOptions).pipe(
      tap((userData: UsuarioI) =>{
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError<UsuarioI>('login'))
    );
  }

  get userData():Observable<UsuarioI> {
    return this.currentUserData.asObservable();
  }

  get userLoginOn():Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  logout() {
    this.currentUserLoginOn.next(false);
  }

}
