import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:5001/api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ data: any }>(`${this.apiUrl}/user/login`, 
        {
        email: email,
        password: password
    })
  }

  register(name: string, email: string, password: string): any {
    return this.http.post<{ data: string[] }>(`${this.apiUrl}/user/add`, 
    {
        name: name,
        email: email, 
        password: password
    });
  }

  isAuthenticated(): boolean {
    const userId = localStorage.getItem('userId');
    return !!userId; // Returns true if userId exists, otherwise false
  }

  
}
