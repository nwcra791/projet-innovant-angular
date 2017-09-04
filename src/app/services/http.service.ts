import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    headers = new Headers({'Content-Type': 'application/json'});
    options = new RequestOptions({ headers: this.headers});

    get(param: string) {
        const headers = new Headers({'Accept': 'application/json'});
        headers.append('session-id', sessionStorage.getItem('token'));
        const options = new RequestOptions({headers: headers});
        return this.http.get('http://localhost:8080/' + param, options);
    }

    post(param: string, data: string) {
        const options = new RequestOptions({headers: this.headers});
        return this.http.post('http://localhost:8080/' + param, data, options);
    }

    authPost(param: string, data: string) {
        const headers = this.headers;
        headers.append('session-id', sessionStorage.getItem('token'));
        headers.append('Accept', 'application/json');
        const options = new RequestOptions({headers: headers});
        return this.http.post('http://localhost:8080/' + param, data, options);
    }
}
