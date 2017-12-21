import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from "../register/register";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})


export class SigninPage {
  //permets de récuperer des élèments de la classe RegisterPage
  public Reg: RegisterPage;
  constructor(public navCtrl: NavController) {

  }
  //envoi l'utilisateur vers la page d'inscription
  registerPage() {
    this.navCtrl.push(RegisterPage);
  }
  //verifie si l'utilisateur est bien dans la base de donnée pour le connecter à l'application
  conect(mail, mdp) {
    let users = this.Reg.users;
    for (var user of users) {
      if (mail == user.mail) {
        if (mdp == user.mdp) {
          alert("CONNECTED!!!");
        }
      }


    }
  }
}