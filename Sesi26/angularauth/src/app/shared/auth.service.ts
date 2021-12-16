import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://fsd-h8-ocbc-my-movies.herokuapp.com';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentUser: {name: string, email: string, _id: string} = 
  { name:'', email:'', _id:''}

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http
      .post(api, user)
      .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';

    if(error.error instanceof ErrorEvent){
      msg = error.error.message;
    } else{
      msg = `Error Code: ${error.error.status}\nMessage: ${error.message}`;
    }

    return throwError(msg)
  }

  getToken(){
    return localStorage.getItem('access_token');
  }

  signIn(user: User) {
    const api = `${this.endpoint}/login`;

    return this.http
    .post(api, user)
    .pipe( catchError(this.handleError) )
  }

  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers})
    .pipe(
      map((res: any)=>{
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

}
