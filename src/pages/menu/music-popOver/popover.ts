import { Component } from '@angular/core'
import { ViewController,NavController } from 'ionic-angular';
import {MapsPage} from '../../maps/maps';
@Component({
    selector: 'page-music-pop',
    template: `
    <ion-grid text-center>
        <ion-row>
        <ion-col>
            <h3>Otros Datos...</h3>
        </ion-col>
        </ion-row>

        <ion-row>
        <ion-col>
            <button ion-button outline>Sobre la App.</button>
        </ion-col>
        </ion-row>

        <ion-row>
        <ion-col>
            <button (click)="maps();" ion-button outline>Ubicación</button>
        </ion-col>
        </ion-row>
    </ion-grid>
`
})

export class MusicPop {
    
    constructor(public navCtrl: NavController,private viewCtrl: ViewController) {}
    
    onAction(action: string) {
        this.viewCtrl.dismiss({action: action});

    }
    maps(){
        this.navCtrl.push(MapsPage);
      }
}