import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
//import { PayPal } from '@ionic-native/paypal';
import {SignupPage} from '../pages/signup/signup';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MenuPage} from '../pages/menu/menu';
import{Intro} from '../pages/intro/intro';
import{ListPage} from '../pages/list/list';
import{CartPage} from '../pages/cart/cart';
import {LoginPage} from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs';
import {ProductsByCategoryPage} from '../pages/products-by-category/products-by-category';
import {ProductDetailsPage} from '../pages/product-details/product-details';
import  {CheckoutPage} from '../pages/checkout/checkout';
import  {SearchPage} from '../pages/search/search';
import { SearchsPage } from '../pages/searchs/searchs';

import { Profile } from '../pages/profile/profile';
import { ParallaxHeader } from '../components/parallax-header/parallax-header';
import { WoocommerceProvider } from '../providers/woocommerce/woocommerce';
import { MusicPop } from '../pages/menu/music-popOver/popover';
import { AgmCoreModule } from '@agm/core';
import {MapsPage} from '../pages/maps/maps';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchsPage,
    Profile,
    ParallaxHeader,
    ListPage,Intro,
    MusicPop,
    LoginPage,
    MapsPage,
    MenuPage,ProductsByCategoryPage,ProductDetailsPage,CartPage,SignupPage,LoginPage,CheckoutPage,SearchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOJQ-8yWwCOLNvvrA2hRx5-FCWNrX-O4E'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchsPage,
    Profile,
    ListPage,Intro,
    MusicPop,
    LoginPage,
    MapsPage,
    MenuPage,ProductsByCategoryPage,ProductDetailsPage,CartPage,SignupPage,LoginPage,CheckoutPage,SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //PayPal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WoocommerceProvider
  ]
})
export class AppModule {}