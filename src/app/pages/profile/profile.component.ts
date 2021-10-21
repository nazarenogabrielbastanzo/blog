import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private reqSvc: RequestsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    this.reqSvc.getUser(userId).subscribe((user: any) => {
      this.user = user;
    });
  }

  showPosts(userId: number) {
    this.router.navigate(['/posts', userId]);
  }

  showAlbums(userId: number) {
    this.router.navigate(['/posts', userId]);
  }

}
