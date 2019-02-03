import { Component } from '@angular/core';

import { MenuPage } from '../menu/menu';
import { SearchsPage } from '../searchs/searchs';
import { Profile } from '../profile/profile';
import { MapsPage } from '../maps/maps';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
 
  tab2Root = SearchsPage;
  tab3Root = Profile;
  tab4Root = MapsPage;

  constructor() {

  }
}
