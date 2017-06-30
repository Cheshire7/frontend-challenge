import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'birthdayPipe'
})

@Injectable()
export class birthdayPipe implements PipeTransform {
    transform(array: Array<any>, args: string): Array<any> {
            if(args) {
                if (typeof args[0] === "undefined") {
                    return array;
                }
                let direction = args[0][0];
                let column = args.replace('-', '');
                array.sort((a:any, b:any) => {
                    let left = Number(new Date(a[column]));
                    let right = Number(new Date(b[column]));
                    return (direction === "-") ? right - left : left - right;
                });
            }
            return array;

    }
}