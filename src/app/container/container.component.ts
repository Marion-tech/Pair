import { Component, ElementRef, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { PairService } from '../shared/pair.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  // public listNumberPair$: BehaviorSubject<number[]> = new BehaviorSubject<
  //   number[]
  // >([]);
  // public listNumberImpair$: BehaviorSubject<number[]> = new BehaviorSubject<
  //   number[]
  // >([]);
  //public subscription: Subscription = new Subscription();
  // public analyseInput(num: HTMLInputElement) {
  //   let numInput = num.valueAsNumber;
  //   let listPair: number[] = this.listNumberPair$.value;
  //   let listImpair: number[] = this.listNumberImpair$.value;
  //   if (numInput % 2 === 0) {
  //     listPair.push(numInput);
  //     console.log('var array pair:', listPair);
  //     console.log('value : ', this.listNumberPair$.value);
  //     //setTimeout(() => this.listNumberPair$.next(listPair), 6000);
  //     console.log('subject pair: ', this.listNumberPair$);
  //   } else {
  //     listImpair.push(numInput);
  //     this.listNumberImpair$.next(listImpair);
  //     console.log('subject impair : ', this.listNumberImpair$);
  //     console.log('var array impair:', listImpair);
  //   }
  // }
}
