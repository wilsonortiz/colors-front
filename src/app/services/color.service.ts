import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private http: HttpClient) { }

  getColors(page:number){
    return this.http.get(`${environment.apiUrl}?page=${page}`);
  }
}
