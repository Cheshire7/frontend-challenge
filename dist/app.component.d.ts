import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from './_services/data.service';
import { User } from './user';
import './styles/styles.scss';
export declare class AppComponent implements OnInit {
    private userService;
    selectedUser: User;
    user_list: User;
    birthSort: string;
    genderSort: string;
    type: boolean;
    order: string;
    ascending: boolean;
    message: any;
    subscription: Subscription;
    constructor(userService: UserService);
    ngOnInit(): void;
    onSelect(user: User): void;
    usrDel(selectedUser: any): void;
    onBirth(): void;
    onGender(): void;
    skipSort(): void;
}
