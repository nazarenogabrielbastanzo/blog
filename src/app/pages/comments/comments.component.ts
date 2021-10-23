import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: any;
  panelOpenState: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private reqSvc: RequestsService
  ) { }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe((params: any) => {
      this.reqSvc.getCommentsByPost(params.params.postId).subscribe((comments: any) => {
        this.comments = comments;
      })
    })

  }

}
