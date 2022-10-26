import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, User } from './api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public usersWithPosts$: BehaviorSubject<User[]> = new BehaviorSubject(
    [] as User[]
  );

  get usersWithPosts() {
    return this.usersWithPosts$.asObservable();
  }
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.api_users);
  }
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(environment.api_posts);
  }
}
