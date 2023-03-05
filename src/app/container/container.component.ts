import { Component, ElementRef, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  public listNumberPair$: BehaviorSubject<number[]> = new BehaviorSubject<
    number[]
  >([]);
  public listNumberImpair$: BehaviorSubject<number[]> = new BehaviorSubject<
    number[]
  >([]);
  public subscription: Subscription = new Subscription();

  public analyseInput(num: HTMLInputElement) {
    let numInput = num.valueAsNumber;
    let listPair: number[] = this.listNumberPair$.value;
    let listImpair: number[] = this.listNumberImpair$.value;

    if (numInput % 2 === 0) {
      console.log('value : ', this.listNumberPair$.value[0]);
      listPair.push(numInput);
      this.listNumberPair$.next(listPair);
      //this.listNumberPair$.next([numInput]);
      console.log('subject pair: ', this.listNumberPair$);
      console.log('var array pair:', listPair);
    } else {
      listImpair.push(numInput);
      this.listNumberImpair$.next(listImpair);
      console.log('subject impair : ', this.listNumberImpair$);
      console.log('var array impair:', listImpair);
    }
  }
}
