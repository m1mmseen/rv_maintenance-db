import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, propName: string, secondPropName?:string) {
    if (value.length === 0 || filter === '') {
      return value;
    }
    const filteredArray = [];
    for (const item of value) {
      if (item[propName].toLowerCase().includes(filter.toLowerCase())) {
        filteredArray.push(item);
      } else
      if (secondPropName && item[secondPropName].toLowerCase().includes(filter.toLowerCase())) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}
