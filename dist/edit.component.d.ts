import { OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './data.service';
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
export declare class EditComponent implements OnInit, OnDestroy {
    private route;
    private userService;
    genders: string[];
    selected: Array<any>;
    user_list: Array<any>;
    condition: boolean;
    id: number;
    private sub;
    user: Array<any>;
    isAvailable: boolean;
    constructor(route: ActivatedRoute, userService: UserService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggle(): void;
    UserEdit(form: NgForm): void;
}
