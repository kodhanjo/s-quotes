import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datedifference'
})
export class DatedifferencePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
