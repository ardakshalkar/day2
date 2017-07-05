import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CityPage } from '../city/city';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  countries: Array<{title: string,cities:Array<string>}>;
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
		this.countries = [{title:"Kazakhstan",cities:["Almaty","Astana"]},{title:"Russia",cities:["Moscow","Kazan"]}];
  }
  itemTapped(event, item) {
		this.navCtrl.push(CityPage, {
      item: item
    });
  }
}
