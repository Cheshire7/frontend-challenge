import { OnInit, OnDestroy, Inject, Component} from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './_services/data.service';
import './styles/styles.scss';
import { User } from './user';

@Component({
    selector: 'my-app',
    templateUrl: './templates/Detail.html'
})

export class DetailComponent implements OnInit, OnDestroy {
    selectedUser: User;
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

    constructor(@Inject(UserService) private userService: UserService, @Inject(ActivatedRoute) private route: ActivatedRoute) {

    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.getUser();
});

}

getUser = function() {
    this.userService.getUser(this.id).subscribe((resp: Response) => {
        let List = resp.json();

        List.percent = 0;

        if(List.photo != undefined){
            let sum = List.percent + 20;
            List.percent = sum;
        }

        if(List.name != undefined){
            let sum = List.percent + 5;
            List.percent = sum;
        }

        if(List.lastName != undefined){
            let sum = List.percent + 5;
            List.percent = sum;
        }

        if(List.gender != undefined){
            let sum = List.percent + 5;
            List.percent = sum;
        }

        if(List.birthday != undefined){
            let sum = List.percent + 5;
            List.percent = sum;
        }

        if(List.position != undefined){
            let sum = List.percent + 10;
            List.percent = sum;
        }

        if(List.skill){
            let multiple = List.skill.length * 5;
            let sum = List.percent + multiple;
            List.percent = sum;
        }

        if(List.characteristic != undefined){
            let sum = List.percent + 10;
            List.percent = sum;
        }

        this.user = List;

    });
}

    ngOnInit() {
        //this.getUser();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    // user edit
    usrEdit(selectedUser: User) {
        this.selectedUser = selectedUser;
    }

    // user delete
    usrDel(selectedUser){
        this.userService.dellUser(selectedUser);
        this.userService.sendMessage();
    }
}