import { Component, ViewChild  } from '@angular/core';
import { Platform, MenuController, Nav  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersProvider } from '../providers/users';

import { NearbyPage } from '../pages/nearby/nearby';
import { EncountersPage } from '../pages/encounters/encounters';
import { MessagesPage } from '../pages/messages/messages';
import { ActivityPage } from '../pages/activity/activity';
import { SettingsPage } from '../pages/settings/settings';
import { FilterPage } from '../pages/filter/filter';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RequestedPage } from '../pages/requested/requested';
import { AuthService } from '../providers/auth-service/auth-service';


import { NavController, App, LoadingController, ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
  providers: [UsersProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;
  pages: any;
  activePage: any;
  featuredUsers: any = [];
  badgeUsers: any = [];
  loading: any;
  badgedata : any;
  badge : number =0;

  constructor(public app: App,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private userData: UsersProvider, public menu: MenuController,public authService: AuthService,public loadingCtrl: LoadingController,private toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
      { title: 'Friends', component: NearbyPage, icon: 'ios-people' },
      { title: 'Encounters', component: EncountersPage, icon: 'ios-contacts' },
      { title: 'Requests', component: RequestedPage, icon: 'md-person-add' },
      { title: 'Messages', component: MessagesPage, icon: 'ios-chatboxes' },
      { title: 'Activity', component: ActivityPage, icon: 'ios-flash' },
      { title: 'Settings', component: SettingsPage, icon: 'ios-settings' },
      { title: 'Logout', component: LoginPage, icon: 'log-out' }
    ];



    this.activePage = this.pages[1];
    userData.getrequested(localStorage.getItem("user")).subscribe(data => this.featuredUsers = data);
    
    userData.getpending(localStorage.getItem("user")).subscribe(data => {
        if(data == 0){
           // this.username = 'Oops_no_user_left_!';
           // this.backGround = 'assets/users/images/1/no_user.jpg';
        }else{
           // this.username = data[0].friend.username; 

        }
        ;this.badgeUsers = data})


  }

      getbadge(){
          //TODO call badge data of pending users
    //userData.getpending(localStorage.getItem("user")).subscribe(data => this.badgedata = data);
    this.badge=this.badgeUsers.length;
      return this.badge;
      }

    getCurrentUser(){
        return localStorage.getItem("user");
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    if(page.title == 'Logout'){
      this.logout();
    }else{
    this.activePage = page;
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    }
    
    
  }

  checkActive(page){

    return page == this.activePage;
  }


  selectimage(){
  console.log("clicked on the image");
  }

  logout() {

    this.authService.logout().then((result) => {
        
        localStorage.clear();
        this.showLoader('Logging out .. Please Wait ...');
      let nav = this.app.getRootNav();
        nav.setRoot(LoginPage);
        this.dismissLoading();

    }, (err) => {
      //this.loading.dismiss();
      this.dismissLoading();
      this.presentToast(err);
    });
  }


    showLoader(msg){
  if(!this.loading){
    this.loading = this.loadingCtrl.create({
        content: msg
    });

    this.loading.present();
    }
  }

    dismissLoading(){
    if(this.loading){
        this.loading.dismiss();
        this.loading = null;
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

}

