import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = environment.URL; // URL do backend local
    constructor(private http: HttpClient) {
        console.log(environment)
    }
    getDados(): Observable<any> {
        return this.http.get(`${this.baseUrl}/dados`);
    }

    sendEmail(data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/send-email`, data);
    }
}
