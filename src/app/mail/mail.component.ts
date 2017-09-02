import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

    private http: HttpService;
    private logging: LoggingService;

    constructor(http: HttpService, logging: LoggingService) {
        this.http = http;
        this.logging = logging;
    }

  ngOnInit() {

  }

}
