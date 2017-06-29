import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AddComponent} from './add.component';
import {EditComponent} from './edit.component';
import {ExponentialStrengthPipe} from './sort_by_name_pipe';

import 'hammerjs';

 
@NgModule({
    imports:[BrowserModule, FormsModule, MaterialModule, HttpModule, BrowserAnimationsModule],
    declarations: [AppComponent, AddComponent, EditComponent, ExponentialStrengthPipe],
    bootstrap: [AppComponent]
})
export class AppModule{}