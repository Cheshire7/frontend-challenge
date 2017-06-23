import { Component, OnInit, Inject } from '@angular/core';
import { HttpService } from './http.service';

import './styles/styles.scss';


@Component({
    selector: 'my-app',
    templateUrl: './templates/List.html',
    providers: [HttpService]
})

export class AppComponent implements OnInit {

    user_list: Array<any>;

    constructor(@Inject(HttpService) private httpService: HttpService) {

    }

    ngOnInit() {
        this.httpService.getData().subscribe(users => this.user_list = users);
    }
}