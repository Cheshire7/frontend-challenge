import { Input, Output, Inject, EventEmitter, Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http} from '@angular/http';
import './styles/styles.scss';

export class User {
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

@Component({
    selector: 'usr-add',
    templateUrl: './templates/AddUser.html',
})

export class AddComponent {

    genders = ['Male', 'Female'];
    user_list: Array<any>;
    @Input() userName: string;
    add: boolean = true;

    constructor(@Inject(Http) private http: Http) { }

    @Output() onChanged = new EventEmitter<boolean>();
    hideUserAdd(increased) {
        this.onChanged.emit(increased);
    }

    UserAdd(form: NgForm){
        let link = '/api/personal/';
        let data = form.value;
        if(data.photo == true){
            data.photo = "imgs/avatar-2.png";
        }else{
            data.photo = "";
        }
        this.http.post(link, data).subscribe((res) => {
        });
    }

    avatar: boolean = true;

    photoAdd() {
        this.avatar = !this.avatar;
    }
}