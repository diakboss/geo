import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the DeplacementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deplacement',
  templateUrl: 'deplacement.html',
})
export class DeplacementPage {

  constructor(private menuCtrl : MenuController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeplacementPage');
  }
  onToggleMenu(){
    this.menuCtrl.open();
  }


}
