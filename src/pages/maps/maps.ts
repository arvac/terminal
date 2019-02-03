import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  title: string = 'mapa';
   lat: number = 51.678418;
   lng: number = 7.809007;
   constructor(public navCtrl: NavController) {
   this.lat;
   this.lng;
 
   }
 
 }
 
