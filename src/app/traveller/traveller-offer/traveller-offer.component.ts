import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpService } from '../../services/http.service';
import { LoggingService } from '../../services/logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SuiModule } from 'ng2-semantic-ui';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-traveller-offer',
  templateUrl: './traveller-offer.component.html',
  styleUrls: ['./traveller-offer.component.css']
})

export class TravellerOfferComponent implements OnInit {

  private http: HttpService;
  private logging: LoggingService;

  ngOnInit() {
      console.dir('offer');
  }
}
