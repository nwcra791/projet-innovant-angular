import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-hoster',
  templateUrl: './hoster.component.html',
  styleUrls: ['./hoster.component.css']
})
export class HosterComponent implements OnInit {
  private http: HttpClient;
  private title: any = "";
  private userName: any = "";
  private details: any = "";

  constructor(http: HttpClient) {
    this.http = http
  }

    onClickAddOffer() {
   console.info(this.title);
   console.info(this.userName);
   console.info(this.details);

      let headers = new Headers({
          'Content-Type' : 'application/json'
      });

      this.http.post("http://92.222.86.149:443/offers",{
          "author": this.userName,
          "title": this.title,
          "content": this.details
      }, headers)
          .subscribe(
              res => {
                  console.log(res);
              }

          )
  }

  ngOnInit() {
  }

}
