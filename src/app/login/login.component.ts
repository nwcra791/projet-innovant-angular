import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Router } from "@angular/router";
import {HttpService} from "../services/http.service";
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private http: HttpService;
    private router: Router;
    private passwd: any = "";
    private email: any = "";

    private logging: LoggingService;

    constructor(http: HttpService, logging: LoggingService, router: Router) {
        this.http = http
        this.logging = logging
        this.router = router;
    }

    onClickLogin() {

            this.http.post('login', JSON.stringify({
                'email': this.email,
                'password': this.passwd
            })).subscribe(
                res => {
                    //this.logging.login()
                   // console.info(res)
                    //this.logging. setSecret(res['session-id'])
                    //this.logging.setConnInfos(res['User'])
                    this.router.navigate(['/start']);
                });



    }

  ngOnInit() {
  }

}
