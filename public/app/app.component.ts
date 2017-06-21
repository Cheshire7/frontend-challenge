import {Component} from '@angular/core';
 
@Component({
    selector: 'my-app',
    template: `
    			<ul *ngIf='names.length'>
    				<li *ngFor='let name of names'>{{name}}</li>
    			</ul>
    			
    			<form>
				<h3>Добавить сотрудника</h3>

				<div class='field'>
					<label for='title'>Имя</label>
					<input type='text' name='name' #newtitle>
				</div>

				<div class='field'>
					<label for='position'>Должность</label>
					<input type='text' name='position' #newposition>
				</div>
                <button (click)='UserAdd(newtitle, newposition)'>Отправить</button>
            </form>
    		`
})

export class AppComponent { 

	//simple DB
	names: string[];
    age: number;

    constructor() {
    	this.names = ['user1', 'user2', 'user3'];

    }
    //button event
    UserAdd(newtitle: HTMLInputElement, newposition: HTMLInputElement) {
    	console.log('Имя' + newtitle.value);
    	console.log('Должность' + newposition.value); 
    	return false;
    }

}