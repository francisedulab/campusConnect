import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users';

/* #Surya7893
  Generated class for the Favourites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
  providers: [UsersProvider]
})
export class FavouritesPage {
Users1 = [];
Users2 = [];
animateClass: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userData: UsersProvider) {
  	this.animateClass = { 'zoom-in': true };
  }

    ngAfterViewInit() {  
    
        let that = this;
    that.userData.getRandomUsers(7).subscribe(function(res){
        for (let i = 0; i < res.length; i++) {
            setTimeout(function() {
                that.Users1.push(res[i]);
            }, 100 * i);
        }
      });

    that.userData.getRandomUsers(7).subscribe(function(res){
        for (let i = 0; i < res.length; i++) {
            setTimeout(function() {
                that.Users2.push(res[i]);
            }, 100 * i);
        }
      });
    }

}
