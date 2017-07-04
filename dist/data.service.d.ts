import { Http } from '@angular/http';
export declare class UserService {
    private http;
    constructor(http: Http);
    private userUrl;
    getUsers(): any;
    Promise<User>(): any;
    []: any;
}
