import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Task1component} from './component/task1component';
import {Task2Component} from "./component/task2component";
import {Task3component} from "./component/task3component";
import {Task4component} from "./component/task4component";
import {Task5Component} from "./component/task5component";
import {Task6Component} from "./component/task6Component";
import {Task6Component2} from "./component/task6Component2";
import {Task7component} from "./component/task7component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [Task1component,
        Task2Component, Task3component, Task4component, Task5Component, Task6Component, Task6Component2, Task7component],
    bootstrap: [Task1component, Task2Component, Task3component, Task4component, Task5Component, Task6Component, Task6Component2, Task7component]
})
export class Module {
}