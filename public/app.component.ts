import { Component, OnInit, Inject} from '@angular/core';
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

export class AppComponent implements OnInit {

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

    //ngOnInit() {
    //    this.http.get('/api/personal').map(res => res.json()).subscribe(users => this.user_list = users);
    //}

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

        //.map(res => res.json()).subscribe(users => this.user_list = users);
        //console.log(this.user_list);

    }

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
        this.detail = false;
        this.add = !this.add;
        //this.selectedUser = closeWindow;
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