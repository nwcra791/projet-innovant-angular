import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from '../services/http.service';
import {LoggingService} from '../services/logging.service';
import * as moment from 'moment';

@Component({
    selector: 'app-menu-computer',
    templateUrl: './menu-computer.component.html',
    styleUrls: ['./menu-computer.component.css']
})
export class MenuComputerComponent implements OnInit {

    public logging: LoggingService;
    private http: HttpService;
    public events = [];

    constructor(logging: LoggingService, http: HttpService) {
        this.logging = logging;
        this.http = http;
    }

    ngOnInit() {
        moment.locale('fr');
        this.http.get('notifications').subscribe(
            res => {
                console.log(res.json());
                this.setUpEvents(res.json().received);
                this.setUpEvents(res.json().sent);
                this.sortByDueDate();
                this.events.reverse();
            });
    }

    setUpEvents(events: any) {
        for (const event of events) {
            // date = new Date(yyyy,mm,dd,HH,MM,SS);
            const date = event.date.split(' ');
            const dmy = date[0].split('/');
            const hm = date[1].split(':');
            event.date = new Date(20 + dmy[2], dmy[1] - 1, dmy[0], hm[0], hm[1]);
            console.log('year = ' + (20 + dmy[2]));
            console.log('month = ' + dmy[1]);
            console.log('day = ' + dmy[0]);
            console.log(event.date);
            this.events.push(event);
        }
    }

    sortByDueDate(): void {
        this.events.sort((a: any, b: any) => {
            return a.date.getTime() - b.date.getTime();
        });
    }
}
