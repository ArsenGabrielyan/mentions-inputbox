import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {
  transform(value: string[], query: string): string[] {
    if(!query) return value;
    return [...value.filter(val=>val.toLowerCase().includes(query))];
  }
}