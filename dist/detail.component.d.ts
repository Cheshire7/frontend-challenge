import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './_services/data.service';
import './styles/styles.scss';
import { User } from './user';
export declare class DetailComponent implements OnInit, OnDestroy {
    private userService;
    private route;
    selectedUser: User;
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
    constructor(userService: UserService, route: ActivatedRoute);
    getUser: () => void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    usrEdit(selectedUser: User): void;
    usrDel(selectedUser: any): void;
}
