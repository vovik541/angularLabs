import {Component} from '@angular/core';

@Component({
    selector: 'task-4',
    template: `<p>Ім'я: {{ name }}</p>
    <p>Кількість кліків {{ count }}</p>
    <button (click)="increase()">Click</button>`
})
export class Task4component {
    name = 'Tom';
    count: number = 0;

    increase(): void {
        this.count++;
    }
}
