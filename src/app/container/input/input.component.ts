import { Component } from '@angular/core';
import { PairService } from 'src/app/shared/pair.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(private pairService: PairService) {}

  public analyseInput(elem: HTMLInputElement) {
    this.pairService.analyseInput(elem);
  }
}
