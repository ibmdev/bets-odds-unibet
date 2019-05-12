import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetsRoutingModule } from './bets-routing.module';
import { HxaComponent } from './hxa/hxa.component';
import { HomeawayComponent } from './homeaway/homeaway.component';
import { OuComponent } from './ou/ou.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [HxaComponent, HomeawayComponent, OuComponent, AccountComponent],
  imports: [
    CommonModule,
    BetsRoutingModule
  ],
  providers: []
})
export class BetsModule {

  constructor() {}
}
