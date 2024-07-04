import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiUrl = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    const userId = localStorage.getItem('userId');

    return this.http.get(`${this.apiUrl}/pet/list?user_id=${userId}`);
  }

  register(pet : any): any {
    return this.http.post<{ data: string[] }>(`${this.apiUrl}/pet/add`, 
    {
        color: pet.color,
        name: pet.name, 
        age: pet.age,
        gender: pet.gender,
        user_id: localStorage.getItem('userId')
    });
  }

  isAuthenticated(): boolean {
    const userId = localStorage.getItem('userId');
    return !!userId; // Returns true if userId exists, otherwise false
  }

  
}
