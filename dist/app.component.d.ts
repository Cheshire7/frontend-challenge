import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
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
    private http;
    selectedUser: User;
    user_list: User;
    add: boolean;
    edit: boolean;
    detail: boolean;
    constructor(http: Http);
    ngOnInit(): void;
    onSelect(user: User): void;
    usrEdit(selectedUser: User): void;
    hideUser(user: User): void;
    usrAdd(closeWindow: User): void;
    onChangedAdd(increased: any): void;
    onChangedEdit(increased: any): void;
    usrDel(selectedUser: any): void;
}
