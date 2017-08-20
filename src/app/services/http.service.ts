import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  secret = sessionStorage.getItem("token");
  setSecret(xdc : string) {
      this.secret = xdc;
  }

  get(param: string) {
    let authToken = localStorage.getItem('auth_token');
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('session-id', this.secret);
    let options = new RequestOptions({ headers: headers });
    return this.http.get("http://localhost:8080/"+param,options);
  }

  post(param: string, data: string) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post("http://localhost:8080/" + param, data, options)
  }

  authPost(param: string, data: string) {
    let headers = this.headers;
    headers.append('session-id', this.secret);
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:8080/" + param, data, options)
  }
}
