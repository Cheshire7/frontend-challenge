import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpService{

    constructor(@Inject(Http) private http: Http){ }

    getData(){
        return this.http.get('/api/personal').map(res => res.json());
    }
}

export class HttpServicePost{

    public name : string;
    public lastName : string;

    constructor(@Inject(Http) private http: Http){ }

    postData(){
        let body = "name=" + this.name + "&lastName=" + this.lastName;
        return this.http.post('/api/personal', body).subscribe(data => {
            console.log(data)
        });

    }
}