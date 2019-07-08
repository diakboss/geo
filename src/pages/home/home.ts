import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation'

declare var google : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  @ViewChild('map') mapElement;
  public map : any; 
  
  constructor(public navCtrl: NavController , private geolocation : Geolocation,private menuCtrl : MenuController) {
   
  }
  ngOnInit(){

  
  
    this.geolocation.getCurrentPosition().then((resp) => {

      this.map = new google.maps.Map( this.mapElement.nativeElement, {
        center : {lat :resp.coords.latitude , lng: resp.coords.longitude},
        map :this.map,
        zoom : 20
  
      })
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  onToggleMenu(){
    this.menuCtrl.open();
  }
  
}
