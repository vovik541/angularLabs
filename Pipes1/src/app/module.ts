import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Task1component} from './task1component';
import { FormatPipe} from './format.pipe';
import { JoinPipe} from './join.pipe';
import { SRootPipe} from './sroot.pipe';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [Task1component, FormatPipe, JoinPipe, SRootPipe],
    bootstrap: [Task1component]
})
export class Module {
}