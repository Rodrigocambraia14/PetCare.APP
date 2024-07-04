import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RandomAnimalImagesService {

  private apiUrl = 'https://random.dog/woof.json?ref=public_apis';

  constructor(private http: HttpClient) { }

  getRandomImage(): any {
    return this.http.get<any>(this.apiUrl);
  }
}
