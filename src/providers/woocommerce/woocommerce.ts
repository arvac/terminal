import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';


@Injectable()
export class WoocommerceProvider {

  Woocommerce: any;
  WoocommerceV2: any;

  constructor() {
    this.Woocommerce = WC({
    url:"http://laniebla.tech",
    consumerKey:"ck_a0f2a5bc79cfb0c23dfd36e4b0d237ab48d636ae",
    consumerSecret:"cs_cba212edcebed5ba4bbcee9d2f4837e2d2bfd5a9"
    });

    this.WoocommerceV2 = WC({
      url:"http://laniebla.tech",
    consumerKey:"ck_a0f2a5bc79cfb0c23dfd36e4b0d237ab48d636ae",
    consumerSecret:"cs_cba212edcebed5ba4bbcee9d2f4837e2d2bfd5a9",
      wpAPI: true,
      version: "wc/v2"
    });
  }

  init(v2?: boolean){
    if(v2 == true){
      return this.WoocommerceV2;
    } else {
      return this.Woocommerce;
    }
  }

}