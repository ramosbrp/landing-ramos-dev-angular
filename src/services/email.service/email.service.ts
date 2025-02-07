import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl = environment.URL;

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    console.log(data)
    return this.http.post(`${this.baseUrl}/send-email`, data);
  }
}
