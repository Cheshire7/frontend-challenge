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
export declare class AddComponent {
    private http;
    genders: string[];
    user_list: Array<any>;
    userName: string;
    add: boolean;
    constructor(http: Http);
    UserAdd(form: NgForm): void;
    avatar: boolean;
    photoAdd(): void;
}
