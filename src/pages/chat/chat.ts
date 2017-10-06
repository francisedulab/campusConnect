import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
	user: any;
	messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.user = navParams.get('user');

	this.messages= [{
    img: this.user.picture.large,
    position: 'left',
    content: 'Hello from the other side.',
    senderName: 'Gregory',
    time: '28-Jun-2016 21:53'
},{
    img: 'assets/img/thumbnail-duckling-1.jpg',
    position: 'right',
    content: 'Hello from the other side.',
    senderName: 'Gregory',
    time: '28-Jun-2016 21:53'
},{
    img: 'assets/img/thumbnail-duckling-1.jpg',
    position: 'right',
    content: 'Hello from the other side.Hello from the other side.Hello from the other side.Hello from the other side.Hello from the other side.',
    senderName: 'Gregory',
    time: '28-Jun-2016 21:53'
},{
    img: this.user.picture.large,
    position: 'left',
    content: 'Hello from the other side.',
    senderName: 'Gregory',
    time: '28-Jun-2016 21:53'
},{
    img: 'assets/img/thumbnail-duckling-1.jpg',
    position: 'right',
    content: 'Hello from the other side.Hello from the other side.Hello from the other side.Hello from the other side.Hello from the other side.',
    senderName: 'Gregory',
    time: '28-Jun-2016 21:53'
},{
    img: this.user.picture.large,
    position: 'left',
    content: 'Hello from the other side.',
    senderName: 'Gregory',
    time: '28-Jun-2016 21:53'
}]
  }

  goBack(){
  	this.navCtrl.pop();
  }

  sendMessage(){
  	
  }

}
