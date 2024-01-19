import { Component } from '@angular/core';
import {concat, filter, map, merge, of, reduce} from "rxjs";

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent
{
  numbers1 = of(1,2,3);
  numbers2= of(4,5,6);
  squaredNumbers = this.numbers1.pipe(map(x => x * x));
  evenNumbers = this.numbers2.pipe(filter(x => x % 2 === 0));
  reducedNumbers = this.numbers2.pipe(reduce((x,y) => x+y));
  mergedNumbers = merge(this.numbers1,this.numbers2);
  concatNumbers = concat(this.numbers1,this.numbers2);

  constructor()
  {
    this.operadorMap();
  }

  operadorMap()
  {
    this.squaredNumbers.subscribe(
      {
        next: res=> console.log('Map',res),
        error:err=> console.error(err),
        complete:()=> console.log('Map Complete')
      }
    )
  }
}
