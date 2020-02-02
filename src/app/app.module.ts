import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WidgetMainComponent } from './widget-main/widget-main.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetRateComponent } from './widget-rate/widget-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetMainComponent,
    WidgetWeatherComponent,
    WidgetRateComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
