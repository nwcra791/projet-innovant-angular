import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { LoggingService } from '../services/logging.service';
import { Params, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})

export class TravellerComponent implements OnInit {

  private http: HttpService;
  private route;
  private logging: LoggingService;
  public voyages;
  public sent = [];
  public recieved = [];

  constructor(http: HttpService, logging: LoggingService) {
      this.http = http;
      this.logging = logging;
  }

  ngOnInit() {
      console.log('traveller');
      this.http.get('trips').subscribe(
          res => {
              if (res.status === 401) {
                  this.logging.invalidateSession();
              }
              this.voyages = res.json();
          });
      this.http.get('messages').subscribe(
          res => {
              if (res.status === 401) {
                  this.logging.invalidateSession();
              }
              this.setupMessages(res.json());
          });
  }

   setupMessages(messages: any) {
       for (const msg of messages) {
           const date = msg.date.split(' ');
           const dmy = date[0].split('/');
           const hm = date[1].split(':');
           msg.date = new Date(20 + dmy[2], dmy[1] - 1, dmy[0], hm[0], hm[1]);
           msg.sender = msg.sender.toLowerCase();
           msg.recipient = msg.recipient.toLowerCase();
           if (msg.sender === this.logging.getMail()) {
               this.sent.push(msg);
           } else {
               this.recieved.push(msg);
           }
       }
   }
}
