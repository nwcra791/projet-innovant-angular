import { Component } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'annonce',
  templateUrl: './annonce.template.html',
  styleUrls: [
    "../../../assets/dist/semantic.min.css"
  ],
})

export class AnnonceComponent {
  constructor(
    private loggingService: LoggingService,
    private httpService: HttpService
  ) {
    httpService.post("/connection", JSON.stringify(this.payload)).subscribe(data => {

     console.log(data);
    });
  }
  payload = {
    email: "quentin@mail.com",
    password: "test123"
  };


  loggingStatut: boolean = this.loggingService.isLogin();

  changedLogging: boolean;
    title: "Annonce";

}
