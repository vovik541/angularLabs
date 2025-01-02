import {Component} from '@angular/core';

@Component({
    selector: 'task-7',
    template: `
        <div [style.backgroundColor]="isyellow? 'yellow' : 'blue'"></div>
        <div [style.background-color]="!isyellow ? 'yellow' : 'blue'"></div>
        <input type="checkbox" [(ngModel)]="isyellow"/>
    `,
    styles: [`
        div {
            width: 50px;
            height: 50px;
            border: 1px solid #ccc
        }
    `]
})
export class Task7component {
    isyellow = false;
}