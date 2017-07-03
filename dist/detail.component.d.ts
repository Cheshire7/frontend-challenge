import { OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
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
export declare class DetailComponent implements OnInit, OnDestroy {
    private http;
    private route;
    selectedUser: User;
    user_list: User;
    nameValue: string;
    add: boolean;
    edit: boolean;
    detail: boolean;
    birthSort: string;
    genderSort: string;
    DefaultSort: string;
    order: string;
    ascending: boolean;
    id: number;
    private sub;
    user: Array<any>;
    constructor(http: Http, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSelect(user: User): void;
    hideUser(user: User): void;
    usrEdit(selectedUser: User): void;
    usrDel(selectedUser: any): void;
    usrAdd(): void;
    onBirth(): void;
    onGender(): void;
    sortOff(): void;
}
