import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  get(param: string) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.get("http://192.168.43.95:8080" + param, options)
    .map((res: Response) => res.json());
  }

  post(param: string, data: string) {
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post("http://192.168.43.95:8080" + param, data, options)
    .map((res: Response) => res.json());
  }
}
