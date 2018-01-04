import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from "../signin/signin";
import { ServiceConnexion } from'../../service-connexion';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {
  public connexion : ServiceConnexion;
  public villes: String[] = ["Castres", "Tarbes", "Toulouse"];
  public sexes: String[] = ["Homme", "Femme"];
  public sections: String[] = ["MMI", "TC"];


  constructor(public navCtrl: NavController) {

  }
  //fonction pour rediriger vers la page de connexion
  login() {
    this.navCtrl.push(SigninPage);
  }

  //fonction appellé si les champs ne sont pas vide pour créer un utilisateur
  addUser(nom, prenom, sexe, mail, mdp, ville, section) {
    //création d'un utilisateur avec les variables entrée dans le formulaire
    let user = new User(nom, prenom, sexe, mail, mdp, ville, section);
    //ajout de l'utilisateur au tableau qui contient tout les utilisateurs
    //this.users.push(user);
    this.connexion.users.push(user)
    if (this.connexion.users.indexOf(user) != null) {
      this.login();
    } else {
      alert("MAUVAIS IDENTIFIENTS");
    }

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
    //si aucun champ n'est vide on appelle la fonction qui ajoute un utilisateur
    if (ret == true) {
      this.addUser(nom, prenom, sexe, mail, mdp, ville, section);
    } else {
      //on affiche le message d'erreur complet pour dire quel champ est mal rempli
      alert(message + "VIDE OU MAL REMPLI!!!");
    }
  }
}
//classe créé pour définir à quoi doit ressembler un utilisateur
export class User {
  nom: String;
  prenom: String;
  sexe: String;
  mail: String;
  mdp: String;
  ville: String;
  section: String;
  constructor(nom: String, prenom: String, sexe: String, mail: String, mdp: String, ville: String, section: String) {
    this.nom = nom;
    this.prenom = prenom;
    this.sexe = sexe;
    this.mail = mail;
    this.ville = ville;
    this.section = section;
  }
}