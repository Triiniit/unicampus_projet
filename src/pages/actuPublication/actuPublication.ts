import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceConnexion } from'../../service-connexion';

@Component({
  selector: 'page-actuPublication',
  templateUrl: 'actuPublication.html'
})
export class ActuPublicationPage {
 
  public sections: String[] = [];

  constructor(public navCtrl: NavController, public connexion : ServiceConnexion) {
                this.sections = this.connexion.getSections();
  }

  
}
