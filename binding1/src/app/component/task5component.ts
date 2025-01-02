import {Component} from '@angular/core';

@Component({
    selector: 'task-5',
    template: `
    <p>Привіт {{ name }}</p>
    <input type="text" [(ngModel)]="name"/> <br><br>
    <input type="text" [(ngModel)]="name"/>`
})
export class Task5Component {
    name = 'Vova';
}