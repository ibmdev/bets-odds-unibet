import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetsRoutingModule } from './bets-routing.module';
import { HxaComponent } from './hxa/hxa.component';
import { HomeawayComponent } from './homeaway/homeaway.component';
import { OuComponent } from './ou/ou.component';

@NgModule({
  declarations: [HxaComponent, HomeawayComponent, OuComponent],
  imports: [
    CommonModule,
    BetsRoutingModule
  ]
})
export class BetsModule { }
