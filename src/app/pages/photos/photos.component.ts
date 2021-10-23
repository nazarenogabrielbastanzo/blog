import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../services/requests.service';
import { PhotoComponent } from '../../components/photo/photo.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any;

  constructor(
    private actRoute: ActivatedRoute,
    private reqSvc: RequestsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: any) => {
      this.reqSvc.getPhotosByAlbum(params.params.albumId).subscribe((photos: any) => {
        this.photos = photos;
      });
    });
  }

  showPhoto(photo: any) {
    this.dialog.open(PhotoComponent, {
      data: photo
    });
  }

}
