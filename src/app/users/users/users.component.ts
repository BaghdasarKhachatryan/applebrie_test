import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/api.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.usersWithPosts.subscribe((data: User[]) => {
      this.users = data;
    });
  }

  navigateById(user: User) {
    //used router to pass data
    this.router.navigate([`users/user/${user.id}`], {
      state: { user },
    });
  }
}
