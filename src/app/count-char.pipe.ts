import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countChar'
})
export class CountCharPipe implements PipeTransform {

  transform(value: string): number {
    return value.length;
  }

}
