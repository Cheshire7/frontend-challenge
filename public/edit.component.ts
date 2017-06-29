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
    selector: 'usr-edit',
    templateUrl: './templates/EditUser.html',
})

export class EditComponent {

    @Input() selected: Array<any>;

    user_list: Array<any>;
    //@Input() userName: string;
    condition: boolean = true;

    constructor(@Inject(Http) private http: Http) { }


    @Output() onChanged = new EventEmitter<boolean>();
    hideUserAdd(increased) {
        this.onChanged.emit(increased);
    }

    UserEdit(form: NgForm){
     console.log(form.value);
        let link = '/api/personal/7';
        let data = form.value;

        if(data.photo == true){
            data.photo = "imgs/avatar-2.png";
        }else{
            data.photo = "";
        }
        this.http.put(link, data).subscribe((res) => {
        });
    }

    avatar: boolean = true;

    imgSrc: string;

    //photoAdds() {
    //    if(this.imgSrc == "./../imgs/photoPlace.png"){
    //        this.imgSrc = "./../imgs/avatar-2.png";
    //    }else{
    //        this.imgSrc = "./../imgs/photoPlace.png";
    //    }
    //}
}