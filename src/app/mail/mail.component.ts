import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../services/http.service';
import {LoggingService} from '../services/logging.service';
import { Params, ActivatedRoute } from '@angular/router';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {logging} from 'selenium-webdriver';

export interface IContext {
    data: string;
}

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
    public readonly = false;
    public mail;
    public mails;
    @ViewChild('modalTemplate')
    public modalTemplate: ModalTemplate<IContext, string, string>;

    constructor(http: HttpService, logging: LoggingService, route:  ActivatedRoute, public modalService: SuiModalService) {
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
                if (res.status === 401) {
                    this.logging.invalidateSession();
                }
                this.mails = res.json();
                for (let i = 0; i < this.mails.length; i++) {
                    this.mails[i].date = this.getDateDiff(this.mails[i]);
                }
                // console.dir(this.mails);
                this.mails.reverse();
            });
    }

    getOneMail(uuid: string) {
        this.http.get('messages/' + uuid).subscribe(
            res => {
                if (res.status === 401) {
                    this.logging.invalidateSession();
                }
                this.mail = res.json();
                this.mail.date = this.getDateDiff(this.mail);
                this.selected = true;
            });
    }

    getDateDiff(mail: any) {
        const date = mail.date.split(' ');
        const dmy = date[0].split('/');
        const hm = date[1].split(':');
        return new Date(20 + dmy[2], dmy[1] - 1, dmy[0], hm[0], hm[1]);
    }

    public open(dynamicContent: string = 'Example') {
        const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

        config.closeResult = 'closed!';
        config.context = { data: dynamicContent };

        this.modalService
            .open(config)
            .onApprove(result => { /* approve callback */ })
            .onDeny(result => { /* deny callback */});
    }

}
