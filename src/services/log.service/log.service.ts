import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  private baseUrl = environment.URL;

  constructor(private http: HttpClient) { }
  private data: any;

  sendData(data: any): Observable<any> {
    this.data = { data: data, date: Date };

    return this.http.post(`${this.baseUrl}/send-data`, this.data);
  
  }

}
