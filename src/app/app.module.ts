import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PairComponent } from './container/pair/pair.component';
import { ImpairComponent } from './container/impair/impair.component';
import { ContainerComponent } from './container/container.component';
import { InputComponent } from './container/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    PairComponent,
    ImpairComponent,
    ContainerComponent,
    InputComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
