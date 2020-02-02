import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WidgetMainComponent } from './widget-main.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WidgetMainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],

  exports: [
    WidgetMainComponent
  ],
})
export class WidgetMainModule { }
