import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from "../services/logging.service";

@Component({
  selector: 'app-menu-computer',
  templateUrl: './menu-computer.component.html',
  styleUrls: ['./menu-computer.component.css']
})
export class MenuComputerComponent implements OnInit {

    logging: LoggingService;

    constructor(logging: LoggingService) {
        this.logging = logging;
    }

  ngOnInit() {

  }

}
