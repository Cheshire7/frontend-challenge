import { Component, OnInit, Inject} from '@angular/core';
import {Http} from '@angular/http';
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
})

export class AppComponent implements OnInit {

    selectedUser: User;
    user_list: User;

    add: boolean = false;
    edit: boolean = false;
    detail: boolean = false;

    constructor(@Inject(Http) private http: Http) { }

    ngOnInit() {
        this.http.get('/api/personal').map(res => res.json()).subscribe(users => this.user_list = users);

    }

//ngOnInit() {
//    this.http.get('/api/personal').subscribe((resp: Response) => {
//        let usersList = resp.json();
//
//        for(let index in usersList){
//
//            usersList[index];
//            //let user = usersList[index];
//            //this.users.push({name: user.userName, age: user.userAge});
//        }
//    });
//
//    //    .map(res => res.json()).subscribe(users => this.user_list = users);
//    //console.log(this.user_list);
//
//}

    // user detail
    onSelect(user: User) {
        this.selectedUser = user;
        this.detail = true;
        this.add = false;
        this.edit = false;
    }

    // user edit
    usrEdit(selectedUser: User) {
        this.selectedUser = selectedUser;
        this.detail = false;
        this.edit = true;
    }

    // user hide
    hideUser(user: User) {
        this.detail = false;
    }

    //user add
    usrAdd(closeWindow: User){
        this.edit = false;
        this.add = !this.add;
        this.selectedUser = closeWindow;
    }

    // Close in add component
    onChangedAdd(increased){
        this.add = false;
    }

    // Close in edit component
    onChangedEdit(increased){
        this.edit = false;
    }

    // user del
    usrDel(selectedUser){
        let id = selectedUser.id;
        let link = '/api/personal/'+id;
        this.http.delete(link).subscribe((res) => {
        });
    }
}