import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpService } from "../../services/http.service";
import { LoggingService } from "../../services/logging.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SuiModule } from 'ng2-semantic-ui';
import { BrowserModule } from '@angular/platform-browser';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-traveller-offer',
  templateUrl: './traveller-offer.component.html',
  styleUrls: ['./traveller-offer.component.css']
})

export class TravellerOfferComponent implements OnInit {

  private http: HttpService;
  private logging: LoggingService;
  private currentVoyage : string;

  public voyages;
  public experiences;
  public selectedOption;
  public newTitle;
  public newContent;
  public newLatitude;
  public newLongitude;
  public markers: marker[] = [];
  public editing : boolean = false;

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number;
  lng: number;


  constructor(http: HttpService, logging: LoggingService) {
    this.http = http;
    this.logging = logging;
  }

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

    // This will get all of his experiences on a trip
    getTripExperiences(trip : string) {
      this.markers = [];
      // this.currentVoyage = trip;
      this.http.get("trips/"+trip).subscribe(res => {
        this.experiences = res.json();
        // if (this.experiences.length > 0) {
        //   this.experiences[0].show = true;  // If you wanna open an experience by default
        // }
        this.zoom = 8;
        this.lat = this.experiences[0].latitude;
        this.lng = this.experiences[0].longitude;
        console.dir(res.json());
        this.setUpMarkers();
      });
    }

    // And that will add an experiences to trip from his uuid
    addTripExperience(data : string) {
      this.http.authPost('experiences', data).subscribe( res => {
        console.log(res.json());
        this.getTripExperiences(this.selectedOption.uuid);
      }
    );
  }

  // Load experiences from trip uuid
  loadExperiences(voyage : Object) {
    // we don't want to load the same stuff again
    if (voyage["uuid"] != this.currentVoyage) {
      this.currentVoyage = voyage["uuid"];
      this.getTripExperiences(voyage["uuid"]);
    }
    // console.log(voyage["name"]);
  }

  // setup markers on map from experiences
  setUpMarkers() {
    for (let experience of this.experiences) {
      this.markers.push({
        lat: experience.latitude,
        lng: experience.longitude
      });
    }
  }

  // Click event when user click on a marker
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  // Click event when user click on the map
  mapClicked($event: any) {
    // editing = if user is on the "Ajouter une experience" pannel
    if (this.editing) {
      if (this.markers.length == this.experiences.length) {
        this.markers.pop();
        this.experiences.pop();
      }
      this.newLatitude = $event.coords.lat;
      this.newLongitude = $event.coords.lng;
      this.experiences.push({
        "content":this.newContent,
        "title":this.newTitle,
        "longitude":this.newLongitude,
        "latitude":this.newLatitude,
        "trip_uuid":this.selectedOption.uuid,
        "offer_uuid":"none" // here we can change none by a valid offer_uuid
      });
      this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng
        // label: this.markers.length.toString()
      });
    }
  }

  // build an experience before the request to the api
  saveExperience(vo) {
    console.log(this.selectedOption.name);
    // console.log(this.currentVoyage);
    if (this.editing && this.newLatitude != null && this.newLongitude != null
      && this.newTitle != null && this.newContent != null) {
        this.currentVoyage = this.selectedOption;
        this.markers.pop();
        this.experiences.pop();
        let data : string = JSON.stringify({
          "content":this.newContent,
          "title":this.newTitle,
          "longitude":this.newLongitude,
          "latitude":this.newLatitude,
          "trip_uuid":this.selectedOption.uuid,
          "offer_uuid":"none" // here we can change none by a valid offer_uuid
        });
        console.log("sending data...");
        this.addTripExperience(data);
      } else
        console.log("failed to send data :(");
    }

    // set editing to true
    isEditing() {
      this.editing = true;
      console.log("editing");
    }

    updateDiv() {
      console.log("test");
    }
  }
