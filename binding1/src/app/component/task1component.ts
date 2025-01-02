import { Component } from '@angular/core';
@Component({
    selector: 'task-1',
    template: `<p>Ім'я: {{name}}</p>
<p>Вік: {{age}}</p>`
})
export class Task1component {
    name = "Vova";
    age = 25;
}