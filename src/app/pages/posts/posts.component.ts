import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(
    private reqSvc: RequestsService
  ) { }

  ngOnInit(): void {
    this.reqSvc.getPosts().subscribe((posts: any) => {
      this.posts = posts;
    });
  }
}
