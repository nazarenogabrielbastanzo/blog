import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  elementData: any[] = [];

  constructor(
    private reqSvc: RequestsService
  ) { }

  displayedColumns: string[] = ['id', 'title'];
  dataSource = new MatTableDataSource<any>(this.elementData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.reqSvc.getPosts().subscribe((posts: any) => {
      console.log(posts);

      this.elementData = posts;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
