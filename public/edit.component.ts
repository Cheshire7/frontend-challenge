import { Input, OnInit, OnDestroy, Inject, Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './_services/data.service';
import { Subscription } from 'rxjs/Subscription';
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
    templateUrl: './templates/EditUser.html'
})

export class EditComponent implements OnInit, OnDestroy {

    genders = ['Male', 'Female'];
    @Input() selected: Array<any>;
    user_list: Array<any>;
    condition: boolean = true;
    id: number;
    private sub: any;
    user: Array<any>;
    isAvailable = true;
    message: any;
    subscription: Subscription;


    constructor(@Inject(ActivatedRoute) private route: ActivatedRoute,
        @Inject(UserService) private userService: UserService) { }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });

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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    toggle(){
    this.condition=!this.condition;
    }

    UserEdit(form: NgForm): void{

        let data = form.value;
        if(data.photo == true){
            data.photo = true;
        }else{
            data.photo = false;
        }

        this.userService.editUser(data, this.id);

        // send message about change via observable subject
        this.userService.sendMessage();
    }
}