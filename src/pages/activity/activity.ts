import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LikedYouPage } from '../../pages/liked-you/liked-you';
import { VisitorsPage } from '../../pages/visitors/visitors';
import { FavouritesPage } from '../../pages/favourites/favourites';

/*
  Generated class for the Activity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
  LikedYouPage = LikedYouPage;
  VisitorsPage = VisitorsPage;
  FavouritesPage = FavouritesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }

}
