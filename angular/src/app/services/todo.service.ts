import { environment } from './../../environments/environment';
import { TODO } from './../models/todo';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  baseUrl = `http://localhost:8001`;

  constructor(
      private http: HttpClient,
  ) { }

  getList(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getProducts')
    .pipe(
      tap( 
        data => {
          return data;
        },
        error => this.handleError(error)
      )
    ); 
  }

  deleteTodo(id): Observable<any> {
    let postUrl = '/deleteProduct/';
    return this.http.delete<any>(this.baseUrl + postUrl + id)
    .pipe(
      tap( 
        data => {
          return data;
        },
        error => this.handleError(error)
      )
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
