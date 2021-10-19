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

  public getComments(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/comments`);
  }

  public getAlbums(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/albums`);
  }

  public getPhotos(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/photos`);
  }

  public getTodos(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/todos`);
  }

  public getUsers(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  public getCommentsByPost(postId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/posts/${postId}/comments`);
  }

  public getPhotosByAlbum(albumId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/albums/${albumId}/photos`);
  }

  public getAlbumsPerUser(userId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/${userId}/albums`);
  }

  public getTodosPerUser(userId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/${userId}/todos`);
  }

  public getPostsPerUser(userId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/${userId}/posts`);
  }
}
