import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitPipe'
})
export class LimitPipePipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    if (value.length > 0) {
      return value.slice(0, args[0]);
    } 
    return false
  }

}
