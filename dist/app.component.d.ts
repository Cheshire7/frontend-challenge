import { OnInit } from '@angular/core';
import { HttpService } from './http.service';
import './styles/styles.scss';
export declare class AppComponent implements OnInit {
    private httpService;
    user_list: Array<any>;
    constructor(httpService: HttpService);
    ngOnInit(): void;
}
