import { OnInit } from '@angular/core';
import { HttpService } from './http.service';
import './styles/styles.scss';
export declare class AppComponent implements OnInit {
    private httpService;
    constructor(httpService: HttpService);
    ngOnInit(): void;
    UserAdd(newtitle: HTMLInputElement, newposition: HTMLInputElement): boolean;
}
