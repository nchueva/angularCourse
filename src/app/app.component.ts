import { Component } from '@angular/core';
import { IHotel } from './widget-main/widget-main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotels: IHotel[] = hotelsData;

  public precipitation: string = this.hotels[0].weather.title;
  public icon: string = this.hotels[0].weather.icon;
  public temperature: number = this.hotels[0].weather.temperature;
  public waterTemp: number = this.hotels[0].weather.water;
  public sm: string = this.hotels[0].social_info.title;
  public secondImage: string = this.hotels[0].social_info.img;
  public followers: number = this.hotels[0].social_info.followers;
  public following: number = this.hotels[0].social_info.following;

  public incomingHotelData(hotelInfo: IHotel): void {
    this.precipitation = hotelInfo.weather.title;
    this.temperature = hotelInfo.weather.temperature;
    this.icon = hotelInfo.weather.icon;
    this.waterTemp = hotelInfo.weather.water;
    this.sm = hotelInfo.social_info.title;
    this.secondImage = hotelInfo.social_info.img;
    this.followers = hotelInfo.social_info.followers;
    this.following = hotelInfo.social_info.following;
  }

  // set data of first hotel in the list of hotels for current country after switch
  public getHolelsForCurrCountry(hotelsOFCurrCountry: IHotel[]) {
     this.precipitation = hotelsOFCurrCountry[0].weather.title;
     this.icon = hotelsOFCurrCountry[0].weather.icon;
     this.temperature = hotelsOFCurrCountry[0].weather.temperature;
     this.waterTemp = hotelsOFCurrCountry[0].weather.water;
     this.sm = hotelsOFCurrCountry[0].social_info.title;
     this.secondImage = hotelsOFCurrCountry[0].social_info.img;
     this.followers = hotelsOFCurrCountry[0].social_info.followers;
     this.following = hotelsOFCurrCountry[0].social_info.following;
  }

}

export const hotelsData: IHotel[] = [
  {
    img: 'burg-eltz.jpg',
    address: 'Austria, Neustrasse 56, Innsbruck, 6010',
    phone: 133556658, // дополнительно задание pipe для форматирования
    weather: {
      title: 'Sunny',
      icon: 'fa fa-sun-o',
      water: 19,
      temperature: 20,
    },
    social_info: {
      title: 'Innsbruck Hotel',
      img: 'cap-de-formentor.jpg',
      followers: 5000,
      following: 100
    },
    type: 'Austria',

  },
  {
    img: 'austria.jpg',
    address: 'Austria, Neustrasse 72, Linz, 4020',
    phone: 133556658, // дополнительно задание pipe для форматирования
    weather: {
      title: 'Cloudy',
      icon: 'fa fa-cloud',
      water: 12,
      temperature: 14,
    },
    social_info: {
      title: 'Linz Hotel',
      img: 'moss.jpg',
      followers: 300,
      following: 157
    },
    type: 'Austria',

  },
  {
    img: 'tajikistan.jpg',
    address: 'Tajikistan, Somestreet 98, Balkh, 1751',
    phone: 2548785157, // дополнительно задание pipe для форматирования
    weather: {
      title: 'Cloudy',
      icon: 'fa fa-cloud',
      water: 10,
      temperature: 15,
    },
    social_info: {
      title: 'Balkh Hotel',
      img: 'winter.jpg',
      followers: 1259,
      following: 5000
    },

    type: 'Tajikistan',

  },
];
