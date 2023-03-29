import { Pipe, PipeTransform } from '@angular/core';
import { IUserList } from '../interfaces/userlist';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {
  transform(value: IUserList[], query: string): IUserList[] {
    if(!query) return value;
    return [...value.filter(val=>val.name.toLowerCase().includes(query.toLowerCase()))];
  }
}