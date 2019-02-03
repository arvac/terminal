import { Component,ViewChild  } from '@angular/core';
import { PopoverController,IonicPage, NavController, NavParams,Slides, ModalController, Events  } from 'ionic-angular';
import {HomePage} from '../home/home';
import {CartPage} from '../cart/cart';
import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';

import { Storage } from '@ionic/storage';
import {ProductsByCategoryPage} from '../products-by-category/products-by-category';
import * as WC from 'woocommerce-api';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';
import { MusicPop } from './music-popOver/popover';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',

})
export class MenuPage {
  woocommerce:any;
  products:any[];
  categories:any[];
  valor:any[];
  numero:number;
  HomePage: any;
 @ViewChild('content') childNavCtrl: NavController;
  loggedIn: boolean;
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public modalCtrl: ModalController, private events: Events, private WP: WoocommerceProvider,public popoverCtrl: PopoverController) {
    this.HomePage = HomePage;
    this.categories =[];
    this.valor =[];
    this.user = {};

  this.woocommerce = WP.init();



 this.woocommerce.getAsync("products/categories").then( (data) => {
 console.log(JSON.parse(data.body).product_categories);
 let temp:any[]=JSON.parse(data.body).product_categories;
 
 for(let i = 0; i < 2; i++){
  if(temp[i].parent == 0){
   this.valor.push(temp[i]);
  }
}
 
 
 for(let i = 0; i < temp.length; i++){
   if(temp[i].parent == 0){
    this.categories.push(temp[i]);
   }
 }
  
 }, (err) => {
  console.log(err)
 });
  this.events.subscribe("updateMenu", () => {
      this.storage.ready().then(() => {
        this.storage.get("userLoginInfo").then((userLoginInfo) => {

          if (userLoginInfo != null) {

            console.log("User logged in...");
            this.user = userLoginInfo.user;
            console.log(this.user);
            this.loggedIn = true;
          }
          else {
            console.log("No user found.");
            this.user = {};
            this.loggedIn = false;
          }

        })
      });


    })

  }
 ionViewDidEnter() {

    this.storage.ready().then(() => {
      this.storage.get("userLoginInfo").then((userLoginInfo) => {

        if (userLoginInfo != null) {

          console.log("User logged in...");
          this.user = userLoginInfo.user;
          console.log(this.user);
          this.loggedIn = true;
        }
        else {
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
        }

      })
    })


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  opencategorypage(category){
    this.navCtrl.setRoot(ProductsByCategoryPage,{"category": category});
  }

  openPage(pageName: string) {
    if (pageName == "signup") {
      this.navCtrl.push(SignupPage);
    }
    if (pageName == "login") {
      this.navCtrl.push(LoginPage);
    }
    if (pageName == 'logout') {
      this.storage.remove("userLoginInfo").then(() => {
        this.user = {};
        this.loggedIn = false;
      })
    }
    if (pageName == 'cart') {
      let modal = this.modalCtrl.create(CartPage);
      modal.present();
    }

  }
  productos(){
    this.navCtrl.push(HomePage);
  }
  
onShowOptions(event: MouseEvent) {
  const popover = this.popoverCtrl.create(MusicPop);
  popover.present({ev: event});
}

}