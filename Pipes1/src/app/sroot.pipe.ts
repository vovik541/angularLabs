import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'nextSq'
})
export class SRootPipe implements PipeTransform {
    transform(value: number, args?: any): number {
        return Math.sqrt(value);
    }
}