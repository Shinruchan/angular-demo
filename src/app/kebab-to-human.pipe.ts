import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kebabToHuman', standalone: true })
export class KebabToHumanPipe implements PipeTransform {
  transform(value: string) {
    return value.replaceAll('-', ' ');
  }
}
