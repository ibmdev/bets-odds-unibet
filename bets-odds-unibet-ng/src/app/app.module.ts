import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Module Widget pour la gestion des charts
import { WidgetsModule } from './widgets/widgets.module';

// Router
import { AppRoutingModule } from './app-routing.module';

// Module DragDropModule de CDK (Material Design)
import { DragDropModule } from '@angular/cdk/drag-drop';

// Module contenant les composants Material Design
import { MaterialModule } from './material/material.module';

// Service Navigation
import { NavigationService } from './services/navigation/navigation.service';

//  Service Guard
import { AccountGuardService } from './services/guards/account-guard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    WidgetsModule,
    DragDropModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AccountGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private navigationService: NavigationService) {}
 }
