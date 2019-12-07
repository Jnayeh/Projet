import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalised'
})
export class PersonalisedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return "Nom du produit:  "+value;
  }

}
