import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {LoggingService} from '../services/logging.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-mail',
    templateUrl: './mail.component.html',
    styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

    private http: HttpService;
    private logging: LoggingService;
    private route: ActivatedRoute;
    public selected = false;
    public mail;
    public mails;

    constructor(http: HttpService, logging: LoggingService, route:  ActivatedRoute) {
        this.http = http;
        this.logging = logging;
        this.route = route;
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            console.dir(params.id);
            if (params.id != null) {
                this.getOneMail(params.id);
            } else {
                this.getAllMails();
            }
        });
    }

    getAllMails() {
        this.http.get('messages').subscribe(
            res => {
                console.dir(res.json());
                this.mails = res.json();
                console.dir(this.mails);
            });
    }

    getOneMail(uuid: string) {
        this.http.get('messages/' + uuid).subscribe(
            res => {
                this.mail = res.json();
                this.selected = true;
            });
    }

}
