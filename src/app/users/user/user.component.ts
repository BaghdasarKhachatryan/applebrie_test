import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post, User } from 'src/app/shared/api.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User;
  posts: Post[];
  constructor(private router: Router) {
    this.posts =
      this.router.getCurrentNavigation()?.extras?.state?.['user']?.['posts'];
    this.user = this.router.getCurrentNavigation()?.extras?.state?.['user'];
  }
}
