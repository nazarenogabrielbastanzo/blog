import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  userId: any;

  constructor(
    private reqSvc: RequestsService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: any) => {
      this.userId = params.params.userId;
    });

    if (this.userId) {
      this.reqSvc.getPostsPerUser(this.userId).subscribe((posts: any) => {
        this.posts = posts;
      });
    } else {
      this.reqSvc.getPosts().subscribe((posts: any) => {
        this.posts = posts;
      });
    }
  }
}
