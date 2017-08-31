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

  constructor(http: HttpService, logging: LoggingService) {
      this.http = http;
      this.logging = logging;
  }

  ngOnInit() {
      console.dir('traveller');
      this.http.get('trips').subscribe(
          res => {
              console.dir(res.json());
              this.voyages = res.json();
          });
  }
}
