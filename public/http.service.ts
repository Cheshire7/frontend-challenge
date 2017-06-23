import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService{

    constructor(@Inject(Http) private http: Http){ }

    getData(){
        return this.http.get('/api/personal')
    }
}