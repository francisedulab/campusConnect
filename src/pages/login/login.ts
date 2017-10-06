import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { EncountersPage } from '../encounters/encounters';
import { RegisterPage } from '../register/register';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	 loading: any;
  public loginData = { username:'', password:'' };
  data: any;

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public navParams: NavParams) {


    //check if there is a user data if there is then log them in directly without login
      if(localStorage.getItem("user")){
      this.navCtrl.setRoot(EncountersPage);
      }
      

  }

  doLogin() {
    if(this.loginData.username.length == 0 ){
    this.createalert("Error","Username cannot be blank",['Dismiss']).present();
    
    }else if(this.loginData.username.length < 5 ){
    this.createalert("Error",'Username length cannot be less than 5 characters',['Dismiss']).present();
    }else if(this.loginData.password.length == 0 ){
            this.createalert("Error","Password cannot be blank",['Dismiss']).present();
    }else if( this.loginData.password.length < 6 ){
            this.createalert("Error",'Password length cannot be less than 6 characters',['Dismiss']).present();
    }else{

  	 this.showLoader('Authenticating...');
    
    this.authService.login(this.loginData).then((result) => {
      //this.loading.dismiss();
      this.dismissLoading();
      this.data = result;
      	if(this.data.type){
      localStorage.setItem('token', this.data.access_token);
      localStorage.setItem('user', this.loginData.username);
      this.navCtrl.setRoot(EncountersPage);
      }else{
      		this.dismissLoading();
      		this.showLoader(this.data.data);
      		this.navCtrl.setRoot(RegisterPage);
      		this.dismissLoading();
      		
      }
    }, (err) => {
      //this.loading.dismiss();
      this.dismissLoading();
      if(err == 'Response with status: 0  for URL: null')
      {
      this.presentToast("Unable to connect to the server,Please try after sometime ...");
      }else{
      this.presentToast(err);
      }
      
    });
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  dismissLoading(){
    if(this.loading){
        this.loading.dismiss();
        this.loading = null;
    }
}

  showLoader(msg){
  if(!this.loading){
    this.loading = this.loadingCtrl.create({
        content: msg
    });

    this.loading.present();
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  } 

  createalert(title,msg,buttons){
     return this.alertCtrl.create({
            title: title,
    subTitle: msg,
    buttons: buttons
  });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

}
