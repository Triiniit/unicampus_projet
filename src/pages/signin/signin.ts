import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { ServiceConnexion } from'../../service-connexion';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})


export class SigninPage {
  //permets de récuperer des élèments de la classe RegisterPage
  public connexion : ServiceConnexion;
  constructor(public navCtrl: NavController) {

  }
  //envoi l'utilisateur vers la page d'inscription
  registerPage() {
    this.navCtrl.push(RegisterPage);
  }
  //verifie si l'utilisateur est bien dans la base de donnée pour le connecter à l'application
  conect(mail, mdp) {
    for (var user of this.connexion.users) {
      if (mail == user.mail) {
        if (mdp == user.mdp) {
          alert("CONNECTED!!!");
        }
    
      }


    }
  }
}