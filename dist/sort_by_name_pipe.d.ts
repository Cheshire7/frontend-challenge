import { PipeTransform } from '@angular/core';
export declare class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent: string): number;
}
