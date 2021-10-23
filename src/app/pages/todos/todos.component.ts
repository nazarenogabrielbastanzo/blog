import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  panelOpenState: boolean = false;
  userId: any;
  todos: any;

  constructor(
    private actRoute: ActivatedRoute,
    private reqSvc: RequestsService
  ) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: any) => {
      this.userId = params.params.userId;
    });

    if (this.userId) {
      this.reqSvc.getTodosPerUser(this.userId).subscribe((todos: any) => {
        this.todos = todos;
      });
    } else {
      this.reqSvc.getTodos().subscribe((todos: any) => {
        this.todos = todos;
      });
    }
  }

}
