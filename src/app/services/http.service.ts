import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  /*get(param: string) {
    let options = new RequestOptions({ headers: this.headers });

    return this.http.get("http://localhost:8080/" + param, options)
        .map((res: Response) => res.json());
  }*/

  post(param: string, data: string) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post("http://localhost:8080/" + param, data, options)
  }
}
