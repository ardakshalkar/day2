import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {
	selectedCountry: any;
	cities: Array<string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {	
	this.selectedCountry = navParams.get('item');
	console.log(this.selectedCountry);
	this.cities = this.selectedCountry["cities"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }

}
