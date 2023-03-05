import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PairService } from 'src/app/shared/pair.service';

@Component({
  selector: 'app-pair',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.scss'],
})
export class PairComponent {
  public listPair$: BehaviorSubject<number[]> =
    this.pairService.listNumberPair$;

  constructor(private pairService: PairService) {
    console.log('Service pair component liste: ', this.listPair$);
  }
}
