import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from './http.service';
import './styles/styles.scss';

export class User {
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

@Component({
    selector: 'my-app',
    templateUrl: './templates/List.html',
    providers: [HttpService]
})

export class AppComponent implements OnInit {

    selectedUser: User;
    user_list: User;

    condition: boolean = true;

    constructor(@Inject(HttpService) private httpService: HttpService) {

    }

    ngOnInit() {
        this.httpService.getData().subscribe(users => this.user_list = users);
    }

    onSelect(user: User) {
        this.selectedUser = user;
        this.condition = true;
    }

    hideUser(user: User) {
        this.selectedUser = user;
    }

    usrAdd(closeWindow: User){
        this.condition = !this.condition;
        this.selectedUser = closeWindow;
    }

    onChanged(increased){
        this.condition = true;
    }

}