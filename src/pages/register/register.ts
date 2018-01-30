import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from "../signin/signin";
import { ServiceConnexion } from'../../service-connexion';
import { User } from '../../user';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {
 // public connexion : ServiceConnexion;
  public villes: String[] = [];
  public sexes: String[] = ["Homme", "Femme"];
  public sections: String[] = ["MMI", "TC"];


  constructor(public navCtrl: NavController, public connexion : ServiceConnexion) {
    this.villes = this.connexion.getVilles();
  }
  //fonction pour rediriger vers la page de connexion
  login() {
    this.navCtrl.push(SigninPage);
  }

  
  //on verifie si les champs sont vide (ret = false) ou pas avant de lancer un message d'ereur 
  //ou d'essayer d'enregister un utilisateur
  verrifChamp(nom, prenom, sexe, mail, mdp, ville, section) {
    //ret permet de dire si oui ou non il y a au moins un champ de vide
    let ret: Boolean;
    //message permet de construire un message d'erreur
    let message: String;
    ret = true;
    //tout les if verifie chaque champ
    if (nom == "") {
      message = message + "NOM, ";
      ret = false;
    }
    if (prenom == "") {
      message = message + "PRÉNOM, ";
      ret = false;
    }
    if (sexe == "" || sexe == "sexe") {
      message = message + "SEXE, ";
      ret = false;
    }
    if (mail == "") {
      message = message + "MAIL, ";
      ret = false;
    }
    if (mdp == "") {
      message = message + "MOT DE PASSE, ";
      ret = false;
    }
    if (ville == "" || ville == "ville") {
      message = message + "VILLE, ";
      ret = false;
    }
    if (section == "" || section == "section") {
      message = message + "SECTION, ";
      ret = false;
    }
    //si aucun champ n'est vide  essaye d'appeller la fonction qui ajoute un utilisateur
    if (ret == true) {
      let user = new User(nom, prenom, sexe, mail, mdp, ville, section);
      if (this.connexion.addUser(user)) {
        this.login();
      }else{
        alert("ERREUR UTILISATEUR NON AJOUTÉ!!!!")
      } 
    } else {
      //on affiche le message d'erreur complet pour dire quel champ est mal rempli
      alert(message + "VIDE OU MAL REMPLI!!!");
    }
  }
}
