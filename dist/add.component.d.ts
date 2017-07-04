import { NgForm } from '@angular/forms';
import { UserService } from './data.service';
import './styles/styles.scss';
export declare class AddComponent {
    private userService;
    genders: string[];
    user_list: Array<any>;
    userName: string;
    add: boolean;
    constructor(userService: UserService);
    UserAdd(form: NgForm): void;
    avatar: boolean;
    photoAdd(): void;
}
