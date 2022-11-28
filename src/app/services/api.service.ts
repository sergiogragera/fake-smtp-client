import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailResponse, PageResponse } from './api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl = 'http://localhost:5080/api';
  
  constructor(private http: HttpClient) { }

  getEmails(page: number): Observable<PageResponse> {
    return this.http.get<PageResponse>(`${this.apiUrl}/email?page=${page}`);
  }

  getEmail(id: string): Observable<EmailResponse> {
    return this.http.get<EmailResponse>(`${this.apiUrl}/email/${id}`);
  }

  deleteEmail(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/email/${id}`);
  }

  deleteAllEmails(): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/email`);
  }
}
