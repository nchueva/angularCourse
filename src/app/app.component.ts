import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCourse';

constructor() { }

  public getHotels() {
    const hotels = [
      {
        img: 'burg-eltz.jpg',
        address: 'Germany, Neustrasse 56, Burg, 40299',
        phone: 133556658, // дополнительно задание pipe для форматирования
        weather: {
          title: 'Rain with sun',
          icon: 'fa-cloud-sun',
          water: 19,
          temperature: 20,
        },
        social_info: {
          title: 'Burg Hotel',
          img: 'cap-de-formentor.jpg',
          followers: 5000,
          following: 100
        },
      },
      {
        img: 'tajikistan.jpg',
        address: 'Germany, Somestreet 98, Augsburg, 60589',
        phone: 2548785157, // дополнительно задание pipe для форматирования
        weather: {
          title: 'Sunny',
          icon: 'fa-sun',
          water: 10,
          temperature: 15,
        },
        social_info: {
          title: 'Augsburg Hotel',
          img: 'winter.jpg',
          followers: 1259,
          following: 5000
        },
      },
    ];

    return hotels;

  }
}

export interface Hotels {
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
