import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { TabsPage } from '../tabs/tabs';
import { ServiceConnexion } from'../../service-connexion';
import { ServiceServeur } from'../../service-serveur';



@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})


export class SigninPage {


  constructor(public navCtrl: NavController, public connexion : ServiceConnexion, public serveur : ServiceServeur) {

}
  //envoi l'utilisateur vers la page d'inscription
  registerPage() {
    this.navCtrl.push(RegisterPage);
  }

  conect(mail, mdp) {
    if (this.serveur.verifLogin(mail,mdp)) {
      this.serveur.setMail(mail);
      this.navCtrl.push(TabsPage);
    }else{
      alert("Mauvais identifiants!!!");
    }
  }
}