import { EventEmitter, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import './autocomplete';
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
export declare class AddComponent implements OnInit {
    private httpService;
    user_list: Array<any>;
    userName: string;
    condition: boolean;
    constructor(httpService: HttpService);
    ngOnInit(): void;
    onChanged: EventEmitter<boolean>;
    hideUserAdd(increased: any): void;
    selectedValue: string;
    foods: {
        value: string;
        viewValue: string;
    }[];
}
