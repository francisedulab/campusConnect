import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	loading: any;
  	regData = { username:'', password:'' ,email:'',country:'',phone:'',age:'',gender:''};
  	data: any;
  constructor(private alertCtrl: AlertController, public app: App,public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  }

  doSignup() {

        if(this.regData.username.length == 0 ){
    this.createalert("Error","Username cannot be blank",['Dismiss']).present();
    
    }else if(this.regData.username.length < 5 ){
    this.createalert("Error",'Username length cannot be less than 5 characters',['Dismiss']).present();
    }else if(this.regData.password.length == 0 ){
            this.createalert("Error","Password cannot be blank",['Dismiss']).present();
    }
    else if( this.regData.password.length < 6 ){
            this.createalert("Error",'Password length cannot be less than 6 characters',['Dismiss']).present();
    }else{
    console.log(this.regData.username);
    console.log(this.regData.password);
    console.log(this.regData.email);
    console.log(this.regData.country);
    console.log(this.regData.phone);
    console.log(this.regData.age);
    console.log(this.regData.gender);
    

    this.showLoader('Signing up please wait ...');
    this.authService.register(this.regData).then((result) => {
           
      this.dismissLoading();
      this.data=result;
      if(this.data.type){
      this.showLoader('registered sucessfully please login');
      localStorage.setItem('token', this.data.access_token);
      let nav = this.app.getRootNav();
       nav.setRoot(LoginPage);
       this.dismissLoading();

        
      }else{
         
        this.navCtrl.getActive();
                this.createalert("User Exists",'Please Retry Again',['Dismiss']).present();
         }

      
    }, (err) => {
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

    uploadimage() {
/*    (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
      res.file((resFile) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(resFile);
        reader.onloadend = (evt: any) => {
          var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
          var imageStore = this.firestore.ref().child('image');
          imageStore.put(imgBlob).then((res) => {
            alert('Upload Success');
          }).catch((err) => {
            alert('Upload Failed' + err);
          })
        }
      })
    }) */
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
     // console.log('Dismissed toast');
    });

    toast.present();
  }

  back(){
  let nav = this.app.getRootNav();
        nav.setRoot(LoginPage);
  }

  createalert(title,msg,buttons){
     return this.alertCtrl.create({
            title: title,
    subTitle: msg,
    buttons: buttons
  });
  }


  ionViewDidLoad() {
   //console.log('ionViewDidLoad RegisterPage');
  }

}
