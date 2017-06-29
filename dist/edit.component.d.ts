import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import './styles/styles.scss';
export declare class User {
    id: number;
    photo: string;
    name: string;
    lastName: string;
    gender: string;
    birthday: string;
    position: string;
    skill: any;
    characteristic: string;
}
export declare class EditComponent {
    private http;
    power: number;
    factor: number;
    selected: Array<any>;
    user_list: Array<any>;
    condition: boolean;
    constructor(http: Http);
    onChanged: EventEmitter<boolean>;
    hideUserAdd(increased: any): void;
    UserEdit(form: NgForm): void;
    avatar: boolean;
    imgSrc: string;
}
