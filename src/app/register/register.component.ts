import {Component, Input, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Router } from "@angular/router";
import 'rxjs/add/operator/catch';
import {Headers, RequestOptions} from "@angular/http";
import {LoggingService} from "../services/logging.service";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private http: HttpService;
  private router: Router;
  private logging: LoggingService;

  email:any = "";
  passwd:any = "";

  constructor(http: HttpService, router: Router, logging: LoggingService) {
    this.http = http
    this.router = router
    this.logging = logging
  }

  onClickRegister() {
      this.http.post('register', JSON.stringify({
          'email': this.email,
          'password': this.passwd
      }))
          .subscribe(
              res => {
                  //console.log(res)
                  //this.logging.login()
                  //this.logging.setSecret(res['session-id'])
                  //this.logging.setConnInfos(res['User'])
                  this.router.navigate(['/start']);
              }

          );
  }

  ngOnInit() {
  }

}
