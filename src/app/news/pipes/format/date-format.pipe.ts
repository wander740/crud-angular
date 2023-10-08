import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): unknown {
    let day = new Date(date).getDate();
    let month = new Date(date).toLocaleDateString('default', { month: 'long' });
    let year = new Date(date).getFullYear();
    return day + " " + month[0].toUpperCase() + month.substring(1,3) + ", " + year;
  }

}
