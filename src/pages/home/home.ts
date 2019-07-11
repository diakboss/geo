import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController,MenuController, AlertController } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation'
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

import { HTTP } from '@ionic-native/http';
import { Http, RequestOptions, Headers,  } from '@angular/http';
declare var google : any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement;
  public map : any; 
  public marker : any;
  public marker1 : any ;
  public marker2 : any ;
  public marker3 : any ;
  public marker4 : any ;
  public new : boolean = true;
  public directionsDisplay : any;
  public directionsService : any;
  public distanceinMetre : any;
 

  constructor( public httpN: HTTP,public http : Http,public storage : Storage, public alert : AlertController, public navCtrl: NavController , private geolocation : Geolocation,private menuCtrl : MenuController) {
   

  }
 
  ionViewWillEnter(){  
  
    this.geolocation.getCurrentPosition().then((resp) => {

      this.map = new google.maps.Map( this.mapElement.nativeElement, {
        center : {lat :resp.coords.latitude , lng: resp.coords.longitude},
        map :this.map,
        zoom : 16,
        mapTypeControl: false,
        streetViewControl: false,
        scaleControl: false,
        zoomControl: true,
  
      });
      
      this.marker = new google.maps.Marker({
        position: {lat :resp.coords.latitude , lng: resp.coords.longitude},
        map: this.map,   
    
      });
    
      this.marker4 = new google.maps.Marker({
        position: {lat :  34.044900 , lng: -5.004120},
        map: this.map,
        icon : {
          url  : 'https://img.icons8.com/color/48/000000/taxi.png'
        }
      });
      

      this.marker1 = new google.maps.Marker({
        position: {lat :  34.034190 , lng: -4.997260},
        map: this.map,
        icon : {
          url  : 'https://img.icons8.com/color/48/000000/taxi.png'
        }
    
      });
      
      this.marker2 = new google.maps.Marker({
        position: {lat :  34.042720, lng:-5.000010},
        map: this.map,

        icon : {
          url  : 'https://img.icons8.com/color/48/000000/taxi.png'
        }
    
      });

      this.marker3 = new google.maps.Marker({
        position: {lat :  34.026480, lng:-4.996140},
        map: this.map,
        icon : {
          url  : 'https://img.icons8.com/color/48/000000/taxi.png'
        }
    
      });
    
      this.marker1.addListener('click', ()=> {      

        let pomt = this.alert.create (
          {
            title : 'Voulez-vous contacté ce taxi ?',

            buttons : [
              {
                text : 'Non',
                role : 'cancel'
              },
              {
                text : 'Oui',
                handler : ()=> {
                  if (this.new === true){
                    this.new = false
                  }else if ( this.new === false){
                    this.new = true
                  }
                  this.map = new google.maps.Map( this.mapElement.nativeElement, {
                    center : {lat :resp.coords.latitude , lng: resp.coords.longitude},
                    map :this.map,
                    zoom : 18,
                    mapTypeControl: false,
                    streetViewControl: false,
                    scaleControl: false,
                    zoomControl: true,
                  });
                  
                   console.log(this.new);
                   this.directionsService = new google.maps.DirectionsService();
                   this.directionsDisplay = new google.maps.DirectionsRenderer();
                  var request = 
                            {                      
                              destination: new google.maps.LatLng({lat :  34.034190 , lng: -4.997260}),
                              origin: new google.maps.LatLng({lat :resp.coords.latitude , lng: resp.coords.longitude}),
                              travelMode:'DRIVING',
                            };
                              console.log(request);                         
                              this.directionsService.route(request, (res, status) => {
                                
                                console.log(status);
                                if (status == "OK") 
                                {
                                  console.log(status);
                                  this.directionsDisplay.setDirections(res);
                                  let contentStringg = "Disponible dans "+ this.directionsDisplay['directions']['routes']['0']['legs']['0']['duration']['text'];
                                  var _route = res.routes[0].legs[0];  
                                  this.marker = new google.maps.Marker({
                                    position: _route.start_location,
                                    map: this.map,            
                                                                                                                                         
                                  }),
                                  this.marker.addListener('click', ()=> {
                                    let pomt = this.alert.create( {
                                       title : 'Appuyer sur Oui si votre taxi s\'est rendu disponible ' ,
                                       buttons : [
                                       {
                                        text : 'Non',
                                        role : 'cancel'
                                      },
                                      {
                                        text : 'Oui',
                                        handler : () =>{
                                         this.navCtrl.setRoot(HomePage);
                                        }
                                      }
                                      
                                      ]
                                    })
                                    pomt.present();
                                 });
                                
                                  this.marker1= new google.maps.Marker({
                                    position: _route.end_location,
                                    map: this.map,                  
                                    disableDefaultUI: false,
                                    icon : {
                                      url  : 'https://img.icons8.com/color/48/000000/taxi.png'
                                    }
                                
                                  });
                                  this.directionsDisplay.setMap(this.map);
                                  this.directionsDisplay.setOptions( { suppressMarkers: true } );      
                                  
                                  let infowindoww = new google.maps.InfoWindow
                                  ({
                                    cancel : false,
                                    content: contentStringg
                                  });  
                                  
                                  infowindoww.open(this.marker1.get('map'), this.marker1);
                                }
                                
                                  
                              });
                                           
                }
              }
            ]
          }
        )
        pomt.present();

       });
       
       this.marker2.addListener('click', ()=> {      

        let pomt = this.alert.create (
          {
            title : 'Voulez-vous contacté ce taxi ?',

            buttons : [
              {
                text : 'Non',
                role : 'cancel'
              },
              {
                text : 'Oui',
                handler : ()=> {
                  if (this.new === true){
                    this.new = false
                  }else if ( this.new === false){
                    this.new = true
                  }
                  this.map = new google.maps.Map( this.mapElement.nativeElement, {
                    center : {lat :resp.coords.latitude , lng: resp.coords.longitude},
                    map :this.map,
                    zoom : 18,
                    mapTypeControl: false,
                    streetViewControl: false,
                    scaleControl: false,
                    zoomControl: true,
                  });
                  
                   console.log(this.new);
                   this.directionsService = new google.maps.DirectionsService();
                   this.directionsDisplay = new google.maps.DirectionsRenderer();
                  var request = 
                            {                      
                              destination: new google.maps.LatLng({lat :  34.042720, lng:-5.000010}),
                              origin: new google.maps.LatLng({lat :resp.coords.latitude , lng: resp.coords.longitude}),
                              travelMode:'DRIVING',
                            };
                              console.log(request);                         
                              this.directionsService.route(request, (res, status) => {
                                
                                console.log(status);
                                if (status == "OK") 
                                {
                                  console.log(status);
                                  this.directionsDisplay.setDirections(res);
                                  let contentStringg = "Disponible dans "+ this.directionsDisplay['directions']['routes']['0']['legs']['0']['duration']['text'];
                                  var _route = res.routes[0].legs[0];  
                                  this.marker = new google.maps.Marker({
                                    position: _route.start_location,
                                    map: this.map,            
                                                                                                                                         
                                  }),
                                  this.marker.addListener('click', ()=> {
                                    let pomt = this.alert.create( {
                                       title : 'Appuyer sur Oui si votre taxi s\'est rendu disponible ' ,
                                       buttons : [
                         
                                       {
                                        text : 'Non',
                                        role : 'cancel'
                                      },
                                      {
                                        text : 'Oui',
                                        handler : () =>{
                                         this.navCtrl.setRoot(HomePage);
                                        }
                                      },
                                      
                                      ]
                                    })
                                    pomt.present();
                                 });
                                 
                                  this.marker1= new google.maps.Marker({
                                    position: _route.end_location,
                                    map: this.map,                  
                                    disableDefaultUI: false,
                                    icon : {
                                      url  : 'https://img.icons8.com/color/48/000000/taxi.png'
                                    }
                                
                                  });
                                  this.directionsDisplay.setMap(this.map);
                                  this.directionsDisplay.setOptions( { suppressMarkers: true } );      
                                  
                                  let infowindoww = new google.maps.InfoWindow
                                  ({
                                    cancel : false,
                                    content: contentStringg
                                  });  
                                  
                                  infowindoww.open(this.marker1.get('map'), this.marker1);
                                }
                                
                                  
                              });
                                           
                }
              }
            ]
          }
        )
        pomt.present();

       });
       
       this.marker3.addListener('click', ()=> {      

        let pomt = this.alert.create (
          {
            title : 'Voulez-vous contacté ce taxi ?',

            buttons : [
              {
                text : 'Non',
                role : 'cancel'
              },
              {
                text : 'Oui',
                handler : ()=> {

                  if (this.new === true){
                    this.new = false
                  }else if ( this.new === false){
                    this.new = true
                  }
                  this.map = new google.maps.Map( this.mapElement.nativeElement, {
                    center : {lat :resp.coords.latitude , lng: resp.coords.longitude},
                    map :this.map,
                    zoom : 18,
                    mapTypeControl: false,
                    streetViewControl: false,
                    scaleControl: false,
                    zoomControl: true,
                  });
                  
                   console.log(this.new);
                   this.directionsService = new google.maps.DirectionsService();
                   this.directionsDisplay = new google.maps.DirectionsRenderer();
                  var request = 
                            {                      
                              destination: new google.maps.LatLng({lat :  34.026480, lng:-4.996140}),
                              origin: new google.maps.LatLng({lat :resp.coords.latitude , lng: resp.coords.longitude}),
                              travelMode:'DRIVING',
                            };
                              console.log(request);                         
                              this.directionsService.route(request, (res, status) => {
                                
                                console.log(status);
                                if (status == "OK") 
                                {
                                  console.log(status);
                                  this.directionsDisplay.setDirections(res);
                                  let contentStringg = "Disponible dans "+ this.directionsDisplay['directions']['routes']['0']['legs']['0']['duration']['text'];
                                  var _route = res.routes[0].legs[0];  
                                  this.marker = new google.maps.Marker({
                                    position: _route.start_location,
                                    map: this.map,            
                                                                                                                                         
                                  }),
                                  this.marker.addListener('click', ()=> {
                                    let pomt = this.alert.create( {
                                       title : 'Appuyer sur Oui si votre taxi s\'est rendu disponible ' ,
                                       buttons : [
                                       {
                                        text : 'Non',
                                        role : 'cancel'
                                      },
                                      {
                                        text : 'Oui',
                                        handler : () =>{
                                         this.navCtrl.setRoot(HomePage);
                                        }
                                      },
                                      
                                      ]
                                    })
                                    pomt.present();
                                 });
                                
                                  
                                  this.marker1= new google.maps.Marker({
                                    position: _route.end_location,
                                    map: this.map,                  
                                    disableDefaultUI: false,
                                    icon : {
                                      url  : 'https://img.icons8.com/color/48/000000/taxi.png'
                                    }
                                
                                  });
                                  this.directionsDisplay.setMap(this.map);
                                  this.directionsDisplay.setOptions( { suppressMarkers: true } );      
                                  
                                  let infowindoww = new google.maps.InfoWindow
                                  ({
                                    cancel : false,
                                    content: contentStringg
                                  });  
                                  
                                  infowindoww.open(this.marker1.get('map'), this.marker1);
                                }
                                
                                  
                              });
                                           
                }

              }
            ]
          }
        )
        pomt.present();

       });
       this.marker4.addListener('click', ()=> {      

        let pomt = this.alert.create (
          {
            title : 'Voulez-vous contacté ce taxi ?',

            buttons : [
              {
                text : 'Non',
                role : 'cancel'
              },
              {
                text : 'Oui',
                handler : ()=> {
                  if (this.new === true){
                    this.new = false
                  }else if ( this.new === false){
                    this.new = true
                  }
                  this.storage.set('map', this.new);
                  this.map = new google.maps.Map( this.mapElement.nativeElement, {
                    center : {lat :resp.coords.latitude , lng: resp.coords.longitude},
                    map :this.map,
                    zoom : 18,
                    mapTypeControl: false,
                    streetViewControl: false,
                    scaleControl: false,
                    zoomControl: true,
                  });
                  
                   console.log(this.new);
                   this.directionsService = new google.maps.DirectionsService();
                   this.directionsDisplay = new google.maps.DirectionsRenderer();
                  var request = 
                            {                      
                              destination: new google.maps.LatLng({lat :  34.044900 , lng: -5.004120}),
                              origin: new google.maps.LatLng({lat :resp.coords.latitude , lng: resp.coords.longitude}),
                              travelMode:'DRIVING',
                            };
                              console.log(request);                         
                              this.directionsService.route(request, (res, status) => {
                                
                                console.log(status);
                                if (status == "OK") 
                                {
                                  console.log(status);
                                  this.directionsDisplay.setDirections(res);
                                  let contentStringg = "Disponible dans "+ this.directionsDisplay['directions']['routes']['0']['legs']['0']['duration']['text'];
                                  var _route = res.routes[0].legs[0];  
                                  this.marker = new google.maps.Marker({
                                    position: _route.start_location,
                                    map: this.map,            
                                                                                                                                         
                                  }),
                                  this.marker.addListener('click', ()=> {
                                    let pomt = this.alert.create( {
                                       title : 'Appuyer sur Oui si votre taxi s\'est rendu disponible ' ,
                                       buttons : [
                                         {
                                           text : 'Non',
                                           role : 'cancel'
                                         },
                                         {
                                          text : 'Oui',
                                          handler : () =>{
                                           this.navCtrl.setRoot(HomePage);
                                          }
                                        },
                                      
                                      
                                      ]
                                    })
                                    pomt.present();
                                 });
                                 
                                  
                                  this.marker1= new google.maps.Marker({
                                    position: _route.end_location,
                                    map: this.map,                  
                                    disableDefaultUI: false,
                                    icon : {
                                      url  : 'https://img.icons8.com/color/48/000000/taxi.png'
                                    }
                                
                                  });
                                  this.directionsDisplay.setMap(this.map);
                                  this.directionsDisplay.setOptions( { suppressMarkers: true } );      
                                  
                                  let infowindoww = new google.maps.InfoWindow
                                  ({
                                    cancel : false,
                                    content: contentStringg
                                  });  
                                  
                                  infowindoww.open(this.marker1.get('map'), this.marker1);
                                }
                                
                                  
                              });
                }
              }
            ]
          }
        )
        pomt.present();

       });
       
       
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });




  }
  onToggleMenu(){
    this.menuCtrl.open();
  }

  sendNotifications(p : any)
      {
 
                  let body = 
                    { 
                      "to": p.firebase_token,
                      "notification":
                      {
                        "title": "Geo",
                        "body": "Veuillez .....",
                        "click_action": "FCM_PLUGIN_ACTIVITY",
                        "sound": "default"
                      },
                      "data":
                      {
                        "landing_page": "TabsPage"
                      }
                  };

                  let header: any = 
                    {
                        'Content-Type': 'application/json',
                        'Authorization' : 'key=AIzaSyCSQ_TLwPwabJXwkUkr7haInX1Tym1RW98'
                    }

                  this.httpN.setDataSerializer('json');

                  this.httpN.post('https://fcm.googleapis.com/fcm/send', body, header).then(data =>
                  {
                    console.log(JSON.parse(data.data));
                    let alert1 = this.alert.create({
                      title: 'Geo',
                      subTitle: 'Votre demande a été prise en charge  avec succès.',
                      buttons: 
                      [
                        {
                          text:'OK',
                          handler : () =>
                          {
                                    
                          }
                
                        },
                      ]
                    });
                    alert1.present();   
                  },
                  (err) =>
                  {
                    console.log(err);               
                  });
              
      } 
  
}
