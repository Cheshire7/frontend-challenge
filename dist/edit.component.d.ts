import { OnInit, OnDestroy, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
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
export declare class EditComponent implements OnChanges, OnInit, OnDestroy {
    private http;
    private route;
    genders: string[];
    selected: Array<any>;
    user_list: Array<any>;
    condition: boolean;
    id: number;
    private sub;
    user: Array<any>;
    constructor(http: Http, route: ActivatedRoute);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggle(): void;
    UserEdit(form: NgForm): void;
}
