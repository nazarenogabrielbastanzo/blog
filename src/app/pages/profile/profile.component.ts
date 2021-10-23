import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userId: any;

  constructor(
    private reqSvc: RequestsService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe((params: any) => {
      this.userId = params.params.userId;
    });

    if (this.userId) {
      this.reqSvc.getUser(this.userId).subscribe((user: any) => {
        this.user = user;
      });
    } else {
      const userId = localStorage.getItem('userId');

      this.reqSvc.getUser(userId).subscribe((user: any) => {
        this.user = user;
      });
    }

  }

  showPosts(userId: number) {
    this.router.navigate(['/posts', userId]);
  }

  showAlbums(userId: number) {
    this.router.navigate(['/albums', userId]);
  }

  showTodos(userId: number) {
    this.router.navigate(['/todos', userId]);
  }
}
