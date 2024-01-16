import { Pipe, PipeTransform } from '@angular/core';
import {Entry} from "../models/entry";


@Pipe({
  name: 'allKeysFilter'
})
export class AllKeysFilterPipe implements PipeTransform {

  transform(value: any, filter:string){
    if (value.length === 0 || filter === '') {
      return value;
    }

    const keys = [];
    for (const key in value[0]) {
      keys.push(key);
    }

    const filteredArray = [];
    for (const item of value) {
      for (const key of keys) {
        console.log(item[key])
        if (item[key].toString().toLowerCase().includes(filter.toLowerCase())) {
          filteredArray.push(item);
        }
      }

    }
    return filteredArray;
  }

}
