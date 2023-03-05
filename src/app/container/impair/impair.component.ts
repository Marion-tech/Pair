import { Component } from '@angular/core';
import { PairService } from 'src/app/shared/pair.service';

@Component({
  selector: 'app-impair',
  templateUrl: './impair.component.html',
  styleUrls: ['./impair.component.scss'],
})
export class ImpairComponent {
  public listImpair$: number[] = this.pairService.listNumberImpair$.value;

  constructor(private pairService: PairService) {
    console.log('impair');
  }
}
