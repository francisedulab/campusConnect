import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users';

import { ChatPage } from '../../pages/chat/chat';

/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
  providers: [UsersProvider]
})
export class MessagesPage {

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
   //Begin async operation

     this.ngAfterViewInit().then(()=>{
       infiniteScroll.complete();
     });
  }

  openChat(user){
  	this.navCtrl.push(ChatPage, {user: user})
  }

}
