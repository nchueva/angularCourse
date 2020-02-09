import { Component, OnInit } from '@angular/core';
import { IHotel } from './widget-main/widget-main.component';
import { ThrowStmt } from '@angular/compiler';
import { hotelsData } from './widget-main/widget-main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotels: IHotel[] = hotelsData;

  public title = 'angularCourse';

  public precipitation: string = this.hotels[0].weather.title;
  public icon: string = this.hotels[0].weather.icon;
  public temperature: number = this.hotels[0].weather.temperature;
  public waterTemp: number = this.hotels[0].weather.water;
  public sm: string = this.hotels[0].social_info.title;
  public secondImage: string = this.hotels[0].social_info.img;
  public followers: number = this.hotels[0].social_info.followers;
  public following: number = this.hotels[0].social_info.following;

  public account = {
    name: 'nadya',
    age: '30'
  };

constructor() { }

 public incomingData(hotelInfo: IHotel): void {
   this.precipitation = hotelInfo.weather.title;
   this.temperature = hotelInfo.weather.temperature;
   this.icon = hotelInfo.weather.icon;
   this.waterTemp = hotelInfo.weather.water;
   this.sm = hotelInfo.social_info.title;
   this.secondImage = hotelInfo.social_info.img;
   this.followers = hotelInfo.social_info.followers;
   this.following = hotelInfo.social_info.following;
 }

}

