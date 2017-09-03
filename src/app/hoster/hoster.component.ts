import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";

@Component({
    selector: 'app-hoster',
    templateUrl: './hoster.component.html',
    styleUrls: ['./hoster.component.css']
})
export class HosterComponent implements OnInit {
    private http: HttpService;
    private title: any = "";
    private userName: any = "";
    private details: any = "";
    private adress: any = "";
    private zipcode: any = "";
    private city: any = "";
    private domaine: any = "";
    private nb_seat: any = "";
    private img_url: any = "";
    private img_url2: any = "";
    private img_url3: any = "";



    constructor(http: HttpService) {
        this.http = http;
    }


    setImgUrl() {
        var image = document.getElementById("img1") as HTMLImageElement;
        this.img_url = image.src;
        image = document.getElementById("img2") as HTMLImageElement;
        this.img_url2 = image.src;
        image = document.getElementById("img2") as HTMLImageElement;
        this.img_url2 = image.src;
    }

    onClickAddOffer() {
        console.info(this.title);
        //console.info(this.userName);
        console.info(this.details);
        console.info(this.adress);
        console.info(this.zipcode);
        console.info(this.domaine);
        this.setImgUrl();

        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        this.http.authPost('offers', JSON.stringify({
            "author": "clem_test",
            "title": this.title,
            "adress": this.adress,
            "zip_code": this.zipcode,
            "city": this.city,
            "domaine": this.domaine,
            "nb_seat": this.nb_seat,
            "img_url": this.img_url,
            "img_url2": this.img_url2,
            "img_url3": this.img_url3,
            "content": this.details
        })).subscribe(
            res => {
                console.log(res);
            }
        )
    }

    ngOnInit() {

    }
}
