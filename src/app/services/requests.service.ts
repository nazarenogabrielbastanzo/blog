import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient,
  ) { }

  public getPosts(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts`);
  }
}
