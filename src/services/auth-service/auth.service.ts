import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:5001';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<{ data: any }>(`${this.apiUrl}/user/login`, 
        {
        email: email,
        password: password
    }).pipe(
      map(response => {
        // Assuming response contains userId and token
        const userId = response.data['userId'];
        const token = response.data['token'];
        // Save userId and token to localStorage
        localStorage.setItem('userId', userId);
        localStorage.setItem('token', token);
        return response.data;
      }),
      catchError(this.handleError)
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<{ data: string[] }>(`${this.apiUrl}/user/add`, 
    {
        name: name,
        email: email, 
        password: password
    }).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  isAuthenticated(): boolean {
    const userId = localStorage.getItem('userId');
    return !!userId; // Returns true if userId exists, otherwise false
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
