import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetMainComponent } from './widget-main/widget-main.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetRateComponent } from './widget-rate/widget-rate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WidgetMainComponent,
    WidgetWeatherComponent,
    WidgetRateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
