import { Injectable } from '@angular/core';
import { starwar } from './starwar'
import { STARWARS } from './mock-starwar';
import { Observable, of } from 'rxjs';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service'
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarService {
  starwarUrl :string = 'https://swapi.co/api/people/1/'; 
  queryUrl: string = '?search='; 

  constructor( private http:HttpClient, private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`Star Service: ${message}`);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getStarwar(): Observable<starwar[]> {
    return this.http.get<starwar[]>(this.starwarUrl)
    .pipe(  tap(_ => this.log('starwar fetched')),
      catchError(this.handleError<starwar[]>('getStarwar()',[])));
  }
}
