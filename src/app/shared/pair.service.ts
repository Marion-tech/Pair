import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PairService {
  constructor() {}

  public listNumberPair$: BehaviorSubject<number[]> = new BehaviorSubject<
    number[]
  >([]);
  public listNumberImpair$: BehaviorSubject<number[]> = new BehaviorSubject<
    number[]
  >([]);

  public analyseInput(num: HTMLInputElement) {
    let numInput = num.valueAsNumber;
    let listPair: number[] = this.listNumberPair$.value;
    let listImpair: number[] = this.listNumberImpair$.value;

    if (numInput % 2 === 0) {
      listPair.push(numInput);
      console.log('var array pair:', listPair);
      console.log('value : ', this.listNumberPair$.value);
      console.log('subject pair: ', this.listNumberPair$);
    } else {
      listImpair.push(numInput);
      this.listNumberImpair$.next(listImpair);
      console.log('subject impair : ', this.listNumberImpair$);
      console.log('var array impair:', listImpair);
    }
  }
}
