import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {RxjsService} from "../../services/rxjs.service";

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent
{
    myBehaviorSubject = new BehaviorSubject<String>('Inicial');

    constructor(private service: RxjsService){}
    ejemploBS()
    {
      this.myBehaviorSubject.next('Holiiiii!');
      this.service.addElement(1);
    }
}
