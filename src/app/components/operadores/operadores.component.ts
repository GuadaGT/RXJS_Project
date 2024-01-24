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

  //Calcula cuadrados
  squaredNumbers = this.numbers1.pipe(map(x => x * x));
  //Sacar números pares
  evenNumbers= this.numbers2.pipe(filter(x=> x % 2 === 0));

  coleccionMap: number [] =[];
  coleccionFilter: number [] = [];

  constructor()
  {
    this.operadorMap();
    this.operadorFilter();
  }

  operadorMap()
  {
    this.squaredNumbers.subscribe(
      {
        next: res=>{
            console.log('Map',res),
              this.coleccionMap.push(res)
        },
        error:err=> console.error(err),
        complete:()=> console.log('Map Complete')
      }
    )
  }

  private operadorFilter()
  {
    this.evenNumbers.subscribe(
      {
        next: res=> {
          console.log('Filter', res),
            this.coleccionFilter.push(res)
        },
        error:err=> console.error(err),
        complete:()=>console.log('Filter complete')
      }
    )
  }
}
