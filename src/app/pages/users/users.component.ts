import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(
    private reqSvc: RequestsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reqSvc.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  showProfile(userId: number) {
    this.router.navigate(['/profile', userId]);
  }

}
