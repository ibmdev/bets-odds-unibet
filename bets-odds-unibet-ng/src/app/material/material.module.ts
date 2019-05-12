import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule
  ],
  exports: [
    MatToolbarModule, MatButtonModule, MatIconModule
  ]
})
export class MaterialModule { }
