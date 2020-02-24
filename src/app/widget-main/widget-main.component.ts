import { Component, Output, EventEmitter } from '@angular/core';
import { hotelsData } from '../mock.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'widget-main-component',
  templateUrl: './widget-main.component.html',
  styleUrls: ['./widget-main.component.css']
})


export class WidgetMainComponent {

  public hotels = hotelsData;
  public tempUrl = './assets/images/';
  public firstImg: string = this.tempUrl + this.hotels[0].img;
  public secondImage: string;
  public currentCountry: string = this.hotels[0].type;

  @Output() hotelDataSet = new EventEmitter<any>();
  @Output() hotelsOfCurrCountry = new EventEmitter<any>();

  // create an array with all countries
  public countriesArr: Array<string> = this.hotels.map((item) => item.type);

  // remove duplicated countries from the array
  public countriesSorted: any = this.countriesArr.filter((item: string, pos: number, self: any) => {
    return self.indexOf(item) === pos;
  });

  public changeHotel(hotel: IHotel): void {
    this.firstImg = this.tempUrl + hotel.img;
    this.secondImage = this.tempUrl + hotel.social_info.img;
    this.hotelDataSet.emit(hotel);
  }

  public changeCountry(countryName: string): void {
    this.currentCountry = countryName;
    const hotelsOfCountry = this.hotels.filter((item: IHotel) => item.type === this.currentCountry);
    this.firstImg = this.tempUrl + hotelsOfCountry[0].img;
    this.hotelsOfCurrCountry.emit(hotelsOfCountry); // set array of hotels of current country
  }

}

export interface IHotel {
  img: string;
  address: string;
  phone: number; // дополнительно задание pipe для форматирования
  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number
  };
  social_info: {
    title: string,
    img: string,
    followers: number,
    following: number
  };
  type: string;
}

