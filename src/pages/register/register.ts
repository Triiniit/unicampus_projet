import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from "../signin/signin";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {
  public users: User[];
  public nom = document.getElementById("nom").nodeValue;
  public prenom = document.getElementById("prenom").nodeValue;
  public sexe = document.getElementById("sexe").nodeValue;
  public mail = document.getElementById("mail").nodeValue;
  public mdp = document.getElementById("mdp").nodeValue;
  public ville = document.getElementById("ville").nodeValue;
  public section = document.getElementById("section").nodeValue;
  public villes: String[] = ["Castres", "Tarbes", "Toulouse"];
  public sexes: String[] = ["Homme", "Femme"];
  public sections: String[] = ["MMI", "TC"];
  public message = document.getElementById("message");
  public errorPrenom = document.getElementById("errorPrenom");
  public errorNom = document.getElementById("errorNom");
  public errorSexe = document.getElementById("errorSexe");
  public errorMail = document.getElementById("errorMail");
  public errorMdp = document.getElementById("errorMdp");
  public errorVille = document.getElementById("errorVille");
  public errorSection = document.getElementById("errorSection");

  constructor(public navCtrl: NavController) {

  }
  login() {
    this.navCtrl.push(SigninPage);
  }
  addUser() {
      let user = new User(this.nom, this.prenom, this.sexe, this.mail, this.mdp, this.ville, this.section);
      this.users.push(user);
      if (this.users.indexOf(user) != null) {
        this.login();
      } else {
        this.message.nodeValue = "ERREUR DE TYPE INCONNUE, UTILISATEUR NON AJOUTÉ!!!"
      }
    
  }
  verrifChamp() {
    let ret: Boolean;
    ret = true;
    if (this.nom == "") {
      this.errorNom.nodeValue = "REMPLIR SON NOM!!!";
      ret = false;
    }
    if (this.prenom == "") {
      this.errorPrenom.nodeValue = "REMPLIR SON PRÉNOM!!!";
      ret = false;
    }
    if (this.sexe == "" || this.sexe == "sexe") {
      this.errorNom.nodeValue = "INDIQUEZ VOTRE SEXE!!!";
      ret = false;
    }
    if (this.mail == "") {
      this.errorMail.nodeValue = "REMPLIR SON MAIL!!!";
      ret = false;
    }
    if (this.mdp == "") {
      this.errorMdp.nodeValue = "REMPLIR SON MOT DE PASSE!!!";
      ret = false;
    }
    if (this.ville == "" || this.ville == "ville") {
      this.errorVille.nodeValue = "INDIQUEZ VOTRE VILLE!!!";
      ret = false;
    }
    if (this.section == "" || this.section == "section") {
      this.errorSection.nodeValue = "INDIQUEZ VOTRE SECTION!!!";
      ret = false;
    }
    if (ret == true){
    this.addUser();
    }
  }
}
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