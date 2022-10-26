import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, Subject } from 'rxjs';
import { User } from '../shared/api.model';
import { ApiService } from '../shared/api.service';
import { SpinnerService } from '../shared/spinner/spinner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.startLoading();
    forkJoin({
      users: this.apiService.getUsers(),
      posts: this.apiService.getPosts(),
    })
      .pipe(
        map(({ users, posts }) => {
          for (let user of users) {
            user.posts = [];
            for (let post of posts) {
              if (post.userId === user.id) {
                user.posts.push(post);
              }
            }
          }
          return users;
        })
      )
      .subscribe((data: User[]) => {
        // to show loading spinner
        setTimeout(() => {
          this.spinnerService.finishLoading();
          // used subject to pass data
          this.apiService.usersWithPosts$.next(data);
          this.router.navigate(['users']);
        }, 2000);
      });
  }
}
