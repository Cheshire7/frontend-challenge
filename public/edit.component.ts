import { Input, OnInit, OnDestroy, Inject, Component, OnChanges} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http, Response} from '@angular/http';
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
    selector: 'usr-edit',
    templateUrl: './templates/EditUser.html',
})

export class EditComponent implements OnChanges, OnInit, OnDestroy {

    genders = ['Male', 'Female'];
    @Input() selected: Array<any>;
    user_list: Array<any>;
    condition: boolean = true;
    id: number;
    private sub: any;
    user: Array<any>;


    constructor(@Inject(Http) private http: Http, @Inject(ActivatedRoute) private route: ActivatedRoute) { }

    ngOnChanges() {
        console.log("change");
    }
    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });

        this.http.get('/api/personal/'+this.id).subscribe((resp: Response) => {
            let List = resp.json();

            //for(let index in List){
            //    List.percent = 0;
            //}

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

    UserEdit(form: NgForm){

        let id = this.user["id"];
        let link = '/api/personal/'+id;
        let data = form.value;
        console.log(data);
        if(data.photo == true){
            data.photo = "imgs/avatar-2.png";
        }else{
            data.photo = "";
        }
        this.http.put(link, data).subscribe((res) => {
        });
    }

}