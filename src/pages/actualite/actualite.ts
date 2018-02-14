import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ServiceConnexion } from'../../service-connexion';

import { ActuPublicationPage } from'../actuPublication/actuPublication';
@Component({
  selector: 'page-actualite',
  templateUrl: 'actualite.html'
})
export class ActualitePage {
  //au premier démarrage de la page d'actualité on passe connected à 1 et on affiche un message de bienvenue
  // à l'utilisateur du style Bienvenu Prénom NOM
  // si connected est à 1 on affiche plus le message au démarrage de la page 
private connected : Number = 0;
  constructor(public navCtrl: NavController, public connexion : ServiceConnexion, private toastCtrl: ToastController) {

  }

  public storyAdd(){
    alert("Cette partie est en cour de développement!!!");
  }
  public publication(){
    this.navCtrl.push(ActuPublicationPage);
  }
 public presentToast() {
    let toast = this.toastCtrl.create({
      message: "Bonjour "+ this.connexion.getUserNameByMail(),
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
public premiereConnexion(){
  console.log("Bonjour "+ this.connexion.getUserNameByMail());
  if (this.connected != 1){
    this.presentToast();
    this.connected = 1;
  }
}

ionViewDidLoad(){
this.premiereConnexion();
}
}
