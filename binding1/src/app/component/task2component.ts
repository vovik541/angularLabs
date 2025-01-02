import {Component} from '@angular/core';

@Component({
    selector: 'task-2',
    template: `
        <input type="text" [value]="name"/>
        <input type="text" [value]="age"/>`
})
export class Task2Component {
    name = "Vova";
    age = 25;
}