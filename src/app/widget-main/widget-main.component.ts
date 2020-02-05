import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'widget-main-component',
  templateUrl: './widget-main.component.html',
  styleUrls: ['./widget-main.component.css']
})


export class WidgetMainComponent {

  public hotels = [
    {
      img: 'burg-eltz.jpg',
      address: 'Germany, Neustrasse 56, Burg, 40299',
      phone: 133556658, // дополнительно задание pipe для форматирования
      weather: {
        title: 'Sunny',
        icon: 'fa fa-sun-o',
        water: 19,
        temperature: 20,
      },
      social_info: {
        title: 'Burg Hotel',
        img: 'cap-de-formentor.jpg',
        followers: 5000,
        following: 100
      },
      type: 'Instagram',

    },
    {
      img: 'tajikistan.jpg',
      address: 'Germany, Somestreet 98, Augsburg, 60589',
      phone: 2548785157, // дополнительно задание pipe для форматирования
      weather: {
        title: 'Cloudy',
        icon: 'fa fa-cloud',
        water: 10,
        temperature: 15,
      },
      social_info: {
        title: 'Augsburg Hotel',
        img: 'winter.jpg',
        followers: 1259,
        following: 5000
      },

      type: 'Facebook',

    },
  ];


  public tempUrl = './assets/images/';
  public firstImg: string = './assets/images/' + this.hotels[0].img;
  public secondImage: string;

  // @ViewChild('secodImage', {static: false})
  // public secondImageUrl: ElementRef;

  @Output() hotelDataSet = new EventEmitter<any>();


  constructor() { }

  public changeImgs(hotel: Hotel): void {
    this.firstImg = this.tempUrl + hotel.img;
    this.secondImage = this.tempUrl + hotel.social_info.img;
    this.hotelDataSet.emit(hotel);

  }


}


export interface Hotel {
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

interface Hotels extends Array<Hotel> { }
