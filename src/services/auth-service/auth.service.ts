import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'YOUR_API_URL'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  
  public get isAuthenticated() : boolean {
    return true;
  }
  

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }
}
