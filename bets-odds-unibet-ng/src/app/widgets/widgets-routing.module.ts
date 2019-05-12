import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineseriesComponent } from './charts/lineseries/lineseries.component';
import { ZoomdatetimeComponent } from './charts/zoomdatetime/zoomdatetime.component';

const routes: Routes = [
  { path: 'lineseries', component: LineseriesComponent },
  { path: 'zoomdatetime', component: ZoomdatetimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false })],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
