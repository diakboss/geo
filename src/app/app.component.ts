import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilPage } from '../pages/profil/profil';
import { LoginPage } from '../pages/login/login';
import { FCM } from '@ionic-native/fcm';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') content :  NavController;
  rootPage:any = LoginPage;
  profilPage:any =ProfilPage
  constructor(public fcm : FCM,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl:MenuController) {
    platform.ready().then(() => {
      this.fcm.onNotification().subscribe(data => 
        {
          console.log(data);
          if (data.wasTapped)
          {
            this.content.setRoot(TabsPage);
          } 
          else 
          {
            this.content.setRoot(TabsPage);          
          }
        });
      statusBar.styleDefault();
      splashScreen.hide();

    });;
  }

  onNavigate(page:any){
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

