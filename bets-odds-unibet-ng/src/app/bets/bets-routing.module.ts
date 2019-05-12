import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeawayComponent } from './homeaway/homeaway.component';
import { HxaComponent } from './hxa/hxa.component';
import { OuComponent } from './ou/ou.component';
import { AccountComponent } from './account/account.component';
import { AccountGuardService } from '../services/guards/account-guard.service';

const routes: Routes = [
  { path: '', component: HomeawayComponent},
  { path: 'hxa', component: HxaComponent},
  { path: 'ou', component: OuComponent},
  { path: 'account', canActivate: [AccountGuardService], component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule { }
