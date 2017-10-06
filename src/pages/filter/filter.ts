import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Filter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
	option = "friends";
	withoption = "girl";
	dualValue2= {lower : 18, upper: 30};
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  closeFilter() {
    this.navCtrl.pop();
  }
  saveFilter() {
    this.navCtrl.pop();
  }

  change(d){
 // 	console.log(d);
  }

}
