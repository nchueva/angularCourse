import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'widget-main-component',
  templateUrl: './widget-main.component.html',
  styleUrls: ['./widget-main.component.css']
})


export class WidgetMainComponent {

  public hotels = hotelsData;
  public tempUrl = './assets/images/';
  public firstImg: string = './assets/images/' + this.hotels[0].img;
  public secondImage: string;

  @Output() hotelDataSet = new EventEmitter<any>();

  constructor() { }

  public changeImgs(hotel: IHotel): void {
    this.firstImg = this.tempUrl + hotel.img;
    this.secondImage = this.tempUrl + hotel.social_info.img;
    this.hotelDataSet.emit(hotel);
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
      title: 'BuInnsbruckrg Hotel',
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

