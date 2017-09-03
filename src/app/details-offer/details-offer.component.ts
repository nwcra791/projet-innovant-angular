import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {LoggingService} from "../services/logging.service";
import {HttpService} from "../services/http.service";

@Component({
    selector: 'app-details-offer',
    templateUrl: './details-offer.component.html',
    styleUrls: ['./details-offer.component.css']
})
export class DetailsOfferComponent implements OnInit {

    private http: HttpService;
    private logging: LoggingService;
    private route: ActivatedRoute;

    id_offer: number;
    public offer_Object;

    constructor(http: HttpService, logging: LoggingService, route: ActivatedRoute) {
        this.http = http;
        this.logging = logging;
        this.route = route;
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            if (params.id != null) {
                this.id_offer = params.id;
                this.http.get('offers/' + this.id_offer).subscribe(
                    res => {
                        console.dir(res.json());
                        this.offer_Object = res.json()
                    });
            }
        });
    }

}
