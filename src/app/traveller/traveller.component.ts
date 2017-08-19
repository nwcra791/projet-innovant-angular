import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpService } from "../services/http.service";
import { LoggingService } from "../services/logging.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SuiModule } from 'ng2-semantic-ui';

@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.css']
})

export class TravellerComponent implements OnInit {

  private http: HttpService;
  private logging: LoggingService;

  constructor(http: HttpService, logging: LoggingService) {
    this.http = http;
    this.logging = logging;
  }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  public voyages;
  public experiences;
  public selectedOption;

  ngOnInit() {
    // This will get all of the user trips
    this.http.get("trips").subscribe(
      res => {
        console.dir(res.json());
        this.voyages = res.json();
        this.selectedOption = this.voyages[0];
        this.getTripExperiences(this.selectedOption.uuid);
      });
  }

  // And that will get all of his experiences on a trip
  getTripExperiences(trip : string) {
      this.http.get("trips/"+trip).subscribe(res => {
        this.experiences = res.json();
        this.experiences[0].show = true;
        console.dir(res.json());
      });
  }

  updateDiv() {
    console.log("test");
  }
}
