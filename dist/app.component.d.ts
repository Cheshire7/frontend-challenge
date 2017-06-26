import { OnInit } from '@angular/core';
import { HttpService } from './http.service';
import './styles/styles.scss';
export declare class User {
    id: number;
    photo: string;
    name: string;
    lastName: string;
    pol: string;
    birthday: string;
    position: string;
    skill: any;
    characteristic: string;
}
export declare class AppComponent implements OnInit {
    private httpService;
    selectedUser: User;
    user_list: Array<any>;
    constructor(httpService: HttpService);
    ngOnInit(): void;
    onSelect(user: User): void;
    hideUser(user: User): void;
}
