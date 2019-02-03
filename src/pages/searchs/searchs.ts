import { Component ,ViewChild} from '@angular/core';
import { NavController ,Slides,ToastController} from 'ionic-angular';
import {ProductDetailsPage} from '..//product-details/product-details';
import  {SearchPage} from '..//search/search';
import * as WC from 'woocommerce-api';
// import { SearchPage } from "../search/search";
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';
@Component({
  selector: 'page-searchs',
  templateUrl: 'searchs.html'
})
export class SearchsPage {
  woocommerce:any;
  products:any[];
  moreProducts:any[];
  page:number;
  searchQuery: string = "";
  
  @ViewChild('productSlides')productSlides:Slides;
  constructor(public navCtrl: NavController,public toastCtrl:ToastController, private WP: WoocommerceProvider ) {
  this.page=1;

  this.woocommerce = WP.init();

 
 

  }
  ionViewDidLoad(){
  
  }
  loadMoreProducts(event){
   
   
  }
  openProductPage(product){
    
  }
  onSearch(event){
    if(this.searchQuery.length > 0){
      this.navCtrl.push(SearchPage, {"searchQuery": this.searchQuery});
    }
  }
}