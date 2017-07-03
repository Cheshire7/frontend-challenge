import { OnInit, OnDestroy, Inject, Component, Input} from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
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
    templateUrl: './templates/Detail.html'
})

export class DetailComponent implements OnInit, OnDestroy {
    @Input()
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
    id: number;
    private sub: any;
    user: Array<any>;

    constructor(@Inject(Http) private http: Http, @Inject(ActivatedRoute) private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.

    this.http.get('/api/personal/'+this.id).subscribe((resp: Response) => {
        let UList = resp.json();

        UList.percent = 0;

        if(UList.photo != undefined){
            let sum = UList.percent + 20;
            UList.percent = sum;
        }

        if(UList.name != undefined){
            let sum = UList.percent + 5;
            UList.percent = sum;
        }

        if(UList.lastName != undefined){
            let sum = UList.percent + 5;
            UList.percent = sum;
        }

        if(UList.gender != undefined){
            let sum = UList.percent + 5;
            UList.percent = sum;
        }

        if(UList.birthday != undefined){
            let sum = UList.percent + 5;
            UList.percent = sum;
        }

        if(UList.position != undefined){
            let sum = UList.percent + 10;
            UList.percent = sum;
        }

        if(UList.skill){
            let multiple = UList.skill.length * 5;
            let sum = UList.percent + multiple;
            UList.percent = sum;
        }

        if(UList.characteristic != undefined){
            let sum = UList.percent + 10;
            UList.percent = sum;
        }

        this.user = UList;
    });
});
    }

ngOnInit() {

        this.http.get('/api/personal/'+this.id).subscribe((resp: Response) => {
            let UList = resp.json();

            UList.percent = 0;

            if(UList.photo != undefined){
                let sum = UList.percent + 20;
                UList.percent = sum;
            }

            if(UList.name != undefined){
                let sum = UList.percent + 5;
                UList.percent = sum;
            }

            if(UList.lastName != undefined){
                let sum = UList.percent + 5;
                UList.percent = sum;
            }

            if(UList.gender != undefined){
                let sum = UList.percent + 5;
                UList.percent = sum;
            }

            if(UList.birthday != undefined){
                let sum = UList.percent + 5;
                UList.percent = sum;
            }

            if(UList.position != undefined){
                let sum = UList.percent + 10;
                UList.percent = sum;
            }

            if(UList.skill){
                let multiple = UList.skill.length * 5;
                let sum = UList.percent + multiple;
                UList.percent = sum;
            }

            if(UList.characteristic != undefined){
                let sum = UList.percent + 10;
                UList.percent = sum;
            }

            this.user = UList;
        });
}

ngOnDestroy() {
    this.sub.unsubscribe();
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
    console.log(this.user['id']);
    let id = this.user['id'];
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