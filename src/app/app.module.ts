import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Geolocation} from '@ionic-native/geolocation'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilPage } from '../pages/profil/profil';
import { LoginPage } from '../pages/login/login';
import { ParallaxDirective } from '../directives/parallax/parallax';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { DeplacementPage } from '../pages/deplacement/deplacement';
import { FCM } from '@ionic-native/fcm';
import { HTTP } from '@ionic-native/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ProfilPage,
    LoginPage,
    DeplacementPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ProfilPage,
    LoginPage,
    DeplacementPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    FCM,
    HTTP,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
