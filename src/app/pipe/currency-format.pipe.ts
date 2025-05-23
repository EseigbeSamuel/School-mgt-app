import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '../utils/common';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(
    value: number | string,
    options: {
      currency?: string;
      locale?: string;
      decimals?: number;
      showSymbol?: boolean;
      showCode?: boolean;
      compact?: boolean;
      separateByCommas?: boolean;
    } = {}
  ): string {
    return formatCurrency(value, options);
  }
}
