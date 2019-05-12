import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'bets', loadChildren: './bets/bets.module#BetsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
