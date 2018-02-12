import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ServiceConnexion } from'../../service-connexion';

@Component({
  selector: 'page-actuPublication',
  templateUrl: 'actuPublication.html'
})
export class ActuPublicationPage {
 
  constructor(public navCtrl: NavController, public connexion : ServiceConnexion) {

  }

  
}
