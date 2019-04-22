import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeawayComponent } from './homeaway/homeaway.component';
import { HxaComponent } from './hxa/hxa.component';
import { OuComponent } from './ou/ou.component';

const routes: Routes = [
  { path: '', component: HomeawayComponent},
  { path: 'hxa', component: HxaComponent},
  { path: 'ou', component: OuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule { }
