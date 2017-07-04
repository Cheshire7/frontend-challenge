import { Component, OnInit, Inject, OnChanges, DoCheck } from '@angular/core';
import { Response } from '@angular/http';
import { UserService } from './data.service';
import { User } from './user';

import './styles/styles.scss';

@Component({
    selector: 'my-app',
    templateUrl: './templates/List.html',
    providers: [UserService]
})

export class AppComponent implements OnInit, OnChanges, DoCheck{

    selectedUser: User;
    user_list: User;
    birthSort: string;
    genderSort: string;
    type: boolean = true;

    order = "age";
    ascending = true;

    constructor(@Inject(UserService) private userService: UserService) { }

ngOnChanges(){
    console.log('change');
}

    ngOnInit(){
        this.userService.getUsers().subscribe((resp: Response) => {
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

ngDoCheck(){
    console.log("change");
}

getChange(){
    this.userService.getUsers().subscribe((resp: Response) => {
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
    }
    // user delete
    usrDel(selectedUser){
        this.userService.dellUser(selectedUser);
    }

    // birthday sort
    onBirth(){
        this.birthSort = "-birthday";

    }

    // gender sort
    onGender(){
        this.genderSort = "gender";
        this.type = true;

    }

    // skip sort
    skipSort(){
        this.genderSort = "id";
        this.birthSort = "id";
        this.type = false;
    }

}