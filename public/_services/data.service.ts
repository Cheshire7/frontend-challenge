import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

//import { User } from './user';

@Injectable()
export class UserService{

    constructor (@Inject(Http) private http: Http) {}

    private userUrl = 'api/personal/';
    public user_list: any;

    getUsers(){
        return this.user_list = this.http.get(this.userUrl);
    }

    getUser(userId: number){
        let link = this.userUrl+userId;
        return this.http.get(link);
    }

    addUser(userData: any){
        return this.http.post(this.userUrl, userData).subscribe((res) => { });
    }

    dellUser(userData: any){
        let id = userData.id;
        let link = this.userUrl+id;
        return this.http.delete(link).subscribe((res) => { });
    }

    editUser(userData: any, userId: number){
        let link = this.userUrl+userId;
        this.http.put(link, userData).subscribe((res) => { });
    }

// Subject method

    public subject = new Subject<any>();

    sendMessage(message: string) {
        console.log('MSG', this.subject);
        this.subject.next({ text: message });

    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}