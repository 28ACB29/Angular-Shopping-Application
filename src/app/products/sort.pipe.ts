import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform
{

  transform(value: unknown, ...args: unknown[]): unknown
  {
    return null;
  }

}
