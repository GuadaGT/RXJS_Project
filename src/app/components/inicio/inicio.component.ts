import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  observable$ = new Observable((subscriber)=>{
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  });


  constructor()
  {
    this.comenzarObservable();
  }
  comenzarObservable()
  {
    this.observable$.subscribe({
      next:value => {
        console.log(value);
      },
      error: err => {
        console.error(err);
      },
      complete:()=>{
        console.log('Complete');
      }
    })
  }

}
