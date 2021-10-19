import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private reqSvc: RequestsService
  ) { }

  ngOnInit(): void {
    this.reqSvc.getPosts()
      .subscribe((posts: any) => {
        console.log(posts);

      });

    this.reqSvc.getCommentsByPost(1)
      .subscribe((comments: any) => {
        console.log(comments);

      });
  }

}
