import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent {

  username: string = '';
  users: any[] = [];

  constructor(private userService: UserService) { }

  fetchFollowers() {
    if (this.username) {
      this.userService.getFollowers(this.username).subscribe({
        next: (response: any) => {
          this.users = response;
          console.log(this.users);
        },
        error: (err: any) => {
          console.error(err);
          alert('Failed to fetch followers. Please try again.');
        }
      });
    } else {
      alert('Please enter a username.');
    }
  }
}
