import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propType: string) {
    if (value-length === 0) {
      return value;
    }
    return value.sort((a = value, b = value) => a[propType] < b[propType] ? -1 : a[propType] > b[propType] ? 1 : 0);
  }

}
