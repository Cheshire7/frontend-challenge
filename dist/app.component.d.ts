import { OnInit, OnChanges, DoCheck } from '@angular/core';
import { UserService } from './data.service';
import { User } from './user';
import './styles/styles.scss';
export declare class AppComponent implements OnInit, OnChanges, DoCheck {
    private userService;
    selectedUser: User;
    user_list: User;
    birthSort: string;
    genderSort: string;
    type: boolean;
    order: string;
    ascending: boolean;
    constructor(userService: UserService);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    getChange(): void;
    onSelect(user: User): void;
    usrDel(selectedUser: any): void;
    onBirth(): void;
    onGender(): void;
    skipSort(): void;
}
