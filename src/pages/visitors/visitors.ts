import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users';

/*
  Generated class for the Visitors page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-visitors',
  templateUrl: 'visitors.html',
  providers: [UsersProvider]
})
export class VisitorsPage {

  users = [];
  animateClass: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userData: UsersProvider) {
  	this.animateClass = { 'zoom-in': true };
  }


    ngAfterViewInit() {  
    return new Promise(resolve => {
        let that = this;
    that.userData.getRandomUsers(8).subscribe(function(res){
        for (let i = 0; i < res.length; i++) {
            setTimeout(function() {
                that.users.push(res[i]);
            }, 100 * i);
        }
        resolve(true);
      });
    });
    }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

     this.ngAfterViewInit().then(()=>{
       infiniteScroll.complete();
     });
  }
}
