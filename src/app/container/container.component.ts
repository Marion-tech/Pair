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
          console.log('subject pair: ', v)
        )
      );
      this.pair = this.listNumberPair$.next([numInput]);
    } else {
      this.subscription.add(
        this.listNumberImpair$.subscribe((v: number[]) =>
          console.log('subject impair: ', v)
        )
      );
      this.listNumberImpair$.next(this.listNumberImpair$[numInput]);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
