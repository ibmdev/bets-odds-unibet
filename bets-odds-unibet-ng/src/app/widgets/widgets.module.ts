import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router for Widgets
import { WidgetsRoutingModule } from './widgets-routing.module';
// Widgets
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { OhlcComponent } from './charts/ohlc/ohlc.component';
import { CandlestickComponent } from './charts/candlestick/candlestick.component';
import { ZoomdatetimeComponent } from './charts/zoomdatetime/zoomdatetime.component';
import { LineseriesComponent } from './charts/lineseries/lineseries.component';
import { StackedlineseriesComponent } from './charts/stackedlineseries/stackedlineseries.component';

@NgModule({
  declarations: [
    jqxGridComponent, jqxChartComponent, OhlcComponent,
    CandlestickComponent, ZoomdatetimeComponent, LineseriesComponent,
    StackedlineseriesComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule
  ]
})
export class WidgetsModule { }
