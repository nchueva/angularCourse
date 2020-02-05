import { Component, OnInit } from '@angular/core';
import { Hotel } from './widget-main/widget-main.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'angularCourse';
  public precipitation = 'Sunny';
  public icon = 'fa fa-sun-o';
  public temperature = 20;
  public waterTemp = 19;
  public sm = 'Instagram';
  public secondImage = 'cap-de-formentor.jpg';
  public followers = 5000;
  public following = 100;

constructor() { }

 public incomingData(hotelInfo: Hotel): void {
   this.precipitation = hotelInfo.weather.title;
   this.temperature = hotelInfo.weather.temperature;
   this.icon = hotelInfo.weather.icon;
   this.waterTemp = hotelInfo.weather.water;
   this.sm = hotelInfo.type;
   this.secondImage = hotelInfo.social_info.img;
   this.followers = hotelInfo.social_info.followers;
   this.following = hotelInfo.social_info.following;
 }

}

