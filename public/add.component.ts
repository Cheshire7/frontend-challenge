import { Input, Output, EventEmitter, Component, OnInit, Inject } from '@angular/core';
import { HttpService } from './http.service';
import './autocomplete';
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
    selector: 'usr-add',
    templateUrl: './templates/AddUser.html',
    providers: [HttpService]
})

export class AddComponent implements OnInit {

    user_list: Array<any>;
    @Input() userName: string;
    condition: boolean = true;

    constructor(@Inject(HttpService) private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService.getData().subscribe(users => this.user_list = users);
    }

    @Output() onChanged = new EventEmitter<boolean>();
        hideUserAdd(increased) {
        this.onChanged.emit(increased);
    }

    selectedValue: string;

    foods = [
        {value: 'steak-0', viewValue: 'Male'},
        {value: 'pizza-1', viewValue: 'Female'}
    ];


}