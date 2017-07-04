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
    birthSort: string;
    genderSort: string;
    type: boolean;
    order: string;
    ascending: boolean;
    constructor(http: Http);
    ngOnInit(): void;
    onSelect(user: User): void;
    usrEdit(selectedUser: User): void;
    usrDel(selectedUser: any): void;
    onBirth(): void;
    onGender(): void;
    skipSort(): void;
}
