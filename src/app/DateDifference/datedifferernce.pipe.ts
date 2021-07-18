import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datedifferernce'
})
export class DatediffererncePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
