import { Component } from '@angular/core';
import { LoggingService } from '../../services/logging.service';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'home',
  templateUrl: './home.template.html',
  styleUrls: [
    "../../../assets/dist/semantic.min.css"
  ],
})

export class HomeComponent {
  constructor(
    private loggingService: LoggingService,
    private httpService: HttpService
  ) {
    httpService.post("/connection", JSON.stringify(this.payload)).subscribe(data => {
      loggingService.setSecret(data["session-id"]);
      loggingService.setConnInfos(data.response);
      loggingService.login();

      //this.loggingStatut = this.loggingService.isLogin();
    });
  }

  payload = {
    email: "quentin@mail.com",
    password: "test123"
  };




  changedLogging: boolean;
    title: "Accueil";

}
