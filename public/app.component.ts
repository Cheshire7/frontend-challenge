import { Component, OnInit, Inject, OnChanges} from '@angular/core';
import {Http, Response} from '@angular/http';

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

export class AppComponent implements OnChanges, OnInit {

    selectedUser: User;
    user_list: User;
    nameValue: string;
    add: boolean = false;
    edit: boolean = false;
    detail: boolean = false;
    birthSort: string;
    genderSort: string;
    DefaultSort: string;

    order = "age";
    ascending = true;

    constructor(@Inject(Http) private http: Http) { }


    ngOnChanges() {
        console.log("change");
    }

ngOnInit() {
    this.http.get('/api/personal').subscribe((resp: Response) => {
        let List = resp.json();

        for(let index in List){
            List[index].percent = 0;
        }

        for(let index in List){

            if(List[index].photo != undefined){
                let sum = List[index].percent + 20;
                List[index].percent = sum;
            }

            if(List[index].name != undefined){
                let sum = List[index].percent + 5;
                List[index].percent = sum;
            }

            if(List[index].lastName != undefined){
                let sum = List[index].percent + 5;
                List[index].percent = sum;
            }

            if(List[index].gender != undefined){
                let sum = List[index].percent + 5;
                List[index].percent = sum;
            }

            if(List[index].birthday != undefined){
                let sum = List[index].percent + 5;
                List[index].percent = sum;
            }

            if(List[index].position != undefined){
                let sum = List[index].percent + 10;
                List[index].percent = sum;
            }

            if(List[index].skill){
                let multiple = List[index].skill.length * 5;
                let sum = List[index].percent + multiple;
                List[index].percent = sum;
            }

            if(List[index].characteristic != undefined){
                let sum = List[index].percent + 10;
                List[index].percent = sum;
            }
        }
        this.user_list = List;
    });
}

// user detail
onSelect(user: User) {
    this.selectedUser = user;
    this.detail = true;
}

// user hide
hideUser(user: User) {
    this.detail = false;
}

// user edit
usrEdit(selectedUser: User) {
    this.detail = false;
    this.selectedUser = selectedUser;
}

// user del
usrDel(selectedUser){
    let id = selectedUser.id;
    let link = '/api/personal/'+id;
    this.http.delete(link).subscribe((res) => {
    });
}

usrAdd(){
    this.detail = false;
}

// birthday sort
onBirth(){
    this.birthSort = "-birthday";
}

// gender sort
onGender(){
    this.genderSort = "gender";
}

sortOff(){
    this.DefaultSort = "";
}
}