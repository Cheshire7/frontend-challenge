import { Component, Input, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './_services/data.service';
import './styles/styles.scss';


@Component({
    selector: 'usr-add',
    templateUrl: './templates/AddUser.html',
    providers: [UserService]
})

export class AddComponent {

    genders = ['Male', 'Female'];
    user_list: Array<any>;
    @Input() userName: string;
    add: boolean = true;

    constructor(@Inject(UserService) private userService: UserService) { }

    UserAdd(form: NgForm){
        //let link = '/api/personal/';
        let data = form.value;

        if(data.photo == true){
            data.photo = "imgs/avatar-2.png";
        }else{
            data.photo = "";
        }

        this.userService.addUser(data);
    }


    avatar: boolean = true;

    photoAdd() {
        this.avatar = !this.avatar;
    }
}