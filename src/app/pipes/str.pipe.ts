import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'str',
})
export class StrPipe implements PipeTransform {
  transform(str: string): string {
    return `${str.trim().toLowerCase()} ??`;
  }
}
