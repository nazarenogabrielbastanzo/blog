import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)
    ])
  });

  constructor(
    private reqSvc: RequestsService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.reqSvc.login((this.myForm.value.username).trim(), this.myForm.value.password);
  }

}
