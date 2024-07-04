import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  private apiUrl = 'https://meowfacts.herokuapp.com/?lang=por';

  constructor(private http: HttpClient) { }

  getCatFact(): any {
    return this.http.get<any>(this.apiUrl);
  }
}
