import { Component } from '@angular/core';
import { IHotel } from './widget-main/widget-main.component';
import { hotelsData } from './mock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotels: IHotel[] = hotelsData;

  public hotelInfo: IHotel = this.hotels[0];

  public incomingHotelData(hotelInfo: IHotel): void {
    this.hotelInfo = hotelInfo;
  }

  // set data of first hotel in the list of hotels for current country after switch
  public getHolelsForCurrCountry(hotelsOFCurrCountry: IHotel[]) {
    this.hotelInfo = hotelsOFCurrCountry[0]; // take firts el as default for current country
  }
}
