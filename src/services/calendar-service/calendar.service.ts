import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private apiUrl = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    const userId = localStorage.getItem('userId');

    return this.http.get(`${this.apiUrl}/vaccine_calendar/list?user_id=${userId}`);
  }

  add(data : any): any {
    return this.http.post(`${this.apiUrl}/vaccine_calendar/add`, 
    {
        date: data.date,
        description: data.description, 
        user_id: localStorage.getItem('userId')
    });
  }

  update(data : any): any {
    return this.http.put(`${this.apiUrl}/vaccine_calendar/update`, 
    {
        vaccine_calendar_id: data.id,
        date: data.date,
        description: data.description, 
        user_id: localStorage.getItem('userId')
    });
  }
}
