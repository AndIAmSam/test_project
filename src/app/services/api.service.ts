import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private token = 'VllTOEgrbW5menM4N3hFRVlHTnpwdz09';

  constructor(private http: HttpClient) { }

  get(url: string, params?: any): Observable<any> {
    const apiUrl = `${url}/token(${this.token})`;
    return this.http.get(apiUrl, { params });
  }
}
