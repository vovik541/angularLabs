import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Module } from './app/module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(Module);
