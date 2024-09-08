import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySign'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number | string): string {
    let confirmedPrice = '';
    if (typeof value === 'number') {
      confirmedPrice = value.toString();
    } else if (typeof value === 'string') {
      confirmedPrice = value;
    }
    return confirmedPrice;
  }
}
