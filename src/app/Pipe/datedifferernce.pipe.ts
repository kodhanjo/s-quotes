import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datedifferernce'
})
export class DatediffererncePipe implements PipeTransform {

  transform(value: moment.Moment, ...args: unknown[]): unknown {
    const now = moment();
    return now.diff(value, 'days');
  }

}
