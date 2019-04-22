import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Module Widget pour la gestion des charts
import { WidgetsModule } from './widgets/widgets.module';

// Router
import { AppRoutingModule } from './app-routing.module';

// Module DragDropModule de CDK (Material Design)
import { DragDropModule } from '@angular/cdk/drag-drop';

// Module contenant les composants Material Design
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
    DragDropModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
