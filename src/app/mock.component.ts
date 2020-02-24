import { IHotel } from './widget-main/widget-main.component';

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
