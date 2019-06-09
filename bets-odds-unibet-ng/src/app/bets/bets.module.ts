import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetsRoutingModule } from './bets-routing.module';
import { HxaComponent } from './hxa/hxa.component';
import { HomeawayComponent } from './homeaway/homeaway.component';
import { OuComponent } from './ou/ou.component';
import { AccountComponent } from './account/account.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateApiService } from '../services/translate/translate-api.service';


@NgModule({
  declarations: [HxaComponent, HomeawayComponent, OuComponent, AccountComponent],
  imports: [
    CommonModule,
    BetsRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [TranslateApiService]
})
export class BetsModule {
  constructor() {}
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
