import { BrowserModule, } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { EncountersPage } from '../pages/encounters/encounters';
import { NearbyPage } from '../pages/nearby/nearby';
import { MessagesPage } from '../pages/messages/messages';
import { ChatPage } from '../pages/chat/chat';
import { ActivityPage } from '../pages/activity/activity';
import { LikedYouPage } from '../pages/liked-you/liked-you';
import { VisitorsPage } from '../pages/visitors/visitors';
import { FavouritesPage } from '../pages/favourites/favourites';
import { SettingsPage } from '../pages/settings/settings';
import { FilterPage } from '../pages/filter/filter';

import { GalleryComponent } from '../components/gallery/gallery';
import { ChatBubbleComponent } from '../components/chat-bubble/chat-bubble';
import { ProfilePostsComponent } from '../components/profile-posts/profile-posts';
import { ProfileTimelineComponent } from '../components/profile-timeline/profile-timeline';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AuthService } from '../providers/auth-service/auth-service';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { RequestedPage } from '../pages/requested/requested';
let pages = [
    MyApp,
    HomePage,
    EncountersPage,
    NearbyPage,
    MessagesPage,
    ChatPage,
    ActivityPage,
    LikedYouPage,
    VisitorsPage,
    FavouritesPage,
    SettingsPage,
    FilterPage,
    LoginPage,
    RegisterPage,
    RequestedPage
];

export function declarations() {
  return [pages,GalleryComponent,ChatBubbleComponent,ProfilePostsComponent,ProfileTimelineComponent,LoginPage,RegisterPage,RequestedPage];
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    // Keep this to enable Ionic's runtime error handling during development
    StatusBar,SplashScreen,{ provide: ErrorHandler, useClass: IonicErrorHandler },AuthService
  ];
}



@NgModule({
  declarations: declarations(),
  imports: [
    IonicModule.forRoot(MyApp),BrowserModule,HttpModule,BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule {}