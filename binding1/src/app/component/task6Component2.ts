import {Component} from '@angular/core';

@Component({
    selector: 'task-6-2',
    template: `
        <div [class.isredbox]="isRed"></div>
        <div [class.isredbox]="!isRed"></div>
        <input type="checkbox" [(ngModel)]="isRed"/>
        <div [class]="blue"></div>`,
    styles: [`
        div {
            width: 50px;
            height: 50px;
            border: 1px solid #ccc
        }

        .isredbox {
            background-color: red;
        }

        .isbluebox {
            background-color: blue;
        }
    `]
})
export class Task6Component2 {
    isRed = false;
    blue = "isbluebox"
}
