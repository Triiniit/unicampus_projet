import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { TabsPage } from '../tabs/tabs';
import { ServiceConnexion } from'../../service-connexion';



@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})


export class SigninPage {


  constructor(public navCtrl: NavController, public connexion : ServiceConnexion) {

}
  //envoi l'utilisateur vers la page d'inscription
  registerPage() {
    this.navCtrl.push(RegisterPage);
  }

  conect(mail, mdp) {
    if (this.connexion.verifLogin(mail,mdp)) {
      this.navCtrl.push(TabsPage);
     // this.navCtrl.push(RegisterPage);
    }else{
      alert("Mauvais identifiants!!!");
    }
  }
}