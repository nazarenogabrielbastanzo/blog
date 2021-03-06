import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  newUserStr: any = localStorage.getItem('newUser');
  newUser: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
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

  public getUser(userId: string | null): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/${userId}`);
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

  public getPostsPerUser(userId: string | null): Observable<any> {
    return this.http.get(`${environment.apiUrl}/users/${userId}/posts`);
  }

  public login(username: string, password: string) {

    this.newUser = JSON.parse(this.newUserStr);

    if (this.newUser && password === 'abc123') {
      localStorage.setItem('userId', this.newUser.id);
      this._snackBar.open('Login successful!', 'Ok', {
        duration: 2000,
      });
      this.router.navigate(['/posts']);
    } else {
      this.getUsers().subscribe((users: any) => {
        for (let user of users) {
          if (user.username === username && password === 'abc123') {
            localStorage.setItem('userId', user.id);
            this._snackBar.open('Login successful!', 'Ok', {
              duration: 2000,
            });
            this.router.navigate(['/posts']);
          }
        }
      });
    }

  }

  public register(username: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users`, { username }, httpOptions);
  }

  private initializeStorage(): void {
    const current = localStorage.getItem('userId');
    if (!current) {
      localStorage.setItem('userId', '');
    }
  }
}
