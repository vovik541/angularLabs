import {Component} from '@angular/core';

@Component({
    selector: 'task-6',
    template: `
        <div [class.isredbox]="isRed"></div>
        <div [class.isredbox]="!isRed"></div>
        <input type="checkbox" [(ngModel)]="isRed"/>`,
    styles: [`
        div {
            width: 50px;
            height: 50px;
            border: 1px solid #ccc
        }

        .isredbox {
            background-color: red;
        }
    `]
})
export class Task6Component {
    isRed = false;
}