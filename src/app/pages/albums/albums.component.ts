import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  userId: any;
  albums: any;

  constructor(
    private reqSvc: RequestsService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe((params: any) => {
      this.userId = params.params.userId;
    });

    if (this.userId) {
      this.reqSvc.getAlbumsPerUser(this.userId).subscribe((albums: any) => {
        this.albums = albums;
      });
    } else {
      this.reqSvc.getAlbums().subscribe((albums: any) => {
        this.albums = albums;
      });
    }
  }

}
