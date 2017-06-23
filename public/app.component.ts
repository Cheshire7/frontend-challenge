import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

import './styles/styles.scss';


@Component({
    selector: 'my-app',
    templateUrl: './templates/List.html',
    providers: [HttpService]
})

export class AppComponent implements OnInit {

    constructor(private httpService: HttpService) {

    }

    ngOnInit() {
        this.httpService.getData();
    }

    //button event
    UserAdd(newtitle: HTMLInputElement, newposition: HTMLInputElement) {
    	console.log('Имя' + newtitle.value);
    	console.log('Должность' + newposition.value);
    	return false;
    }

}