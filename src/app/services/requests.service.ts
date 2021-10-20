import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.initializeStorage();
  }

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

  public login(username: string, password: string) {
    this.getUsers().subscribe((users: any) => {
      console.log(users);

      for (let user of users) {
        if (user.username === username && password === 'abc123') {
          localStorage.setItem('userId', user.id);
          this.router.navigate(['/posts']);
        }
      }
    });
  }

  private initializeStorage(): void {
    const current = localStorage.getItem('userId');
    if (!current) {
      localStorage.setItem('userId', '');
    }
  }
}
