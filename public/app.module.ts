import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AddComponent} from './add.component';
import {EditComponent} from './edit.component';
import {namePipe} from './sort_by_name_pipe';
import {birthdayPipe} from './sort_by_birthday_pipe';
import {orderByPipe} from './sort_by_gender_pipe';

import 'hammerjs';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'user', component: EditComponent},
    { path: 'add', component: AddComponent }
];


@NgModule({
    imports:[BrowserModule, FormsModule, MaterialModule, HttpModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, AddComponent, EditComponent, namePipe, birthdayPipe, orderByPipe],
    bootstrap: [AppComponent]
})
export class AppModule{}