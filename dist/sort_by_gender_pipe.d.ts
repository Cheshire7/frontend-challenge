import { PipeTransform } from "@angular/core";
export declare class OrderByPipe implements PipeTransform {
    transform(array: Array<any>, orderField: string, orderType: boolean): Array<string>;
}
