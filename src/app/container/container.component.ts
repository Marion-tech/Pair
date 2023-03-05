import { Component, ElementRef, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnDestroy {
  public listNumberPair$: BehaviorSubject<number[]> = new BehaviorSubject([0]);
  public listNumberImpair$: BehaviorSubject<number[]> = new BehaviorSubject([
    0,
  ]);
  public subscription: Subscription = new Subscription();
  public pair: number[] = [];
  public impair: number[] = [];

  public analyseInput(num: HTMLInputElement) {
    var numInput = num.valueAsNumber;
    if (numInput % 2 === 0) {
      this.subscription.add(
        this.listNumberPair$.subscribe((v: number[]) =>
          console.log('subs pair: ', v)
        )
      );
      this.pair.push(numInput);
      this.listNumberPair$.next(this.pair);
      //this.listNumberPair$.next([numInput]);
      console.log('subject pair: ', this.listNumberPair$);
      console.log('array pair:', this.pair);
    } else {
      this.subscription.add(
        this.listNumberImpair$.subscribe((v: number[]) =>
          console.log('subject impair: ', v)
        )
      );
      this.impair.push(numInput);
      this.listNumberImpair$.next(this.impair);
      console.log('subject impair : ', this.listNumberImpair$);

      console.log('array impair:', this.impair);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
