import {Component} from '@angular/core';

@Component({
    selector: 'task-3',
    template: `
        <table border="1">
            <tr>
                <td [attr.colspan]="colspan">One-Two</td>
            </tr>
            <tr>
                <td>Three</td>
                <td>Four</td>
            </tr>
            <tr>
                <td>Five</td>
                <td>Six</td>
            </tr>
        </table>`
})
export class Task3component {
    name = 'Vova';
    colspan = 2;
}