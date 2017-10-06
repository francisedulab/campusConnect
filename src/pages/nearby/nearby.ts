import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users';

import { FilterPage } from '../../pages/filter/filter';
/*
  Generated class for the Nearby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
  providers: [UsersProvider]
})
export class NearbyPage {
  nearbyUsers = [];
  animateClass: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userData: UsersProvider) {
  	this.animateClass = { 'zoom-in': true };
  }

    ngAfterViewInit() {
    //console.log("nearby page loaded");  

        return new Promise(resolve => {
        let that = this;
        that.userData.getfriends(localStorage.getItem("user")).subscribe(function(res){
         for (let i = 0; i < res.length; i++) {
            setTimeout(function() {
                that.nearbyUsers.push(res[i]);

                //console.log("res[i] => "+res[i].friend.username);
            }, 100 * i);
        } 
        resolve(true);
      });
    }); 

  //  return new Promise(resolve => {
  //      let that = this;
        //TODO get custom url here

        /*
          TODO : call the getfriends method of the server and display the users
        */


    /* that.userData.getRandomUsers(15).subscribe(function(res){
        for (let i = 0; i < res.length; i++) {
            setTimeout(function() {
                that.nearbyUsers.push(res[i]);
            }, 100 * i);
        }
        resolve(true);
      }); */
    //});
    }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

     this.ngAfterViewInit().then(()=>{
       infiniteScroll.complete();
     });
  }

  openFilter(){
  	this.navCtrl.push(FilterPage);
  }

}
