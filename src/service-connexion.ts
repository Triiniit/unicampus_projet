import { Injectable } from '@angular/core';
import { User } from'./user';
@Injectable()
export class ServiceConnexion {
    private users: User[] = [];
    private villes: String[] = ["Auch","Castres", "Tarbes", "Toulouse"];
    private sexes: String[] = ["Homme", "Femme"];
    private sections: String[] = ["MMI", "TC"];
    private mail : String;
// ici c'est le service angular qui permets de faire le lien avec la base de données pour la création 
//d'utilisateur et la connexion
    constructor() { 
      let user = new User("Dupont", "Jean", "Homme", "mail@fai.fr", "mdp", "Castres", "MMI");
      this.users.push(user);
  }
/**
 * getUsers
 */
public getUsers() : User[] {
 return this.users; 
}
public getVilles() : String[] {
  return this.villes; 
 }
 public getSexes() : String[] {
  return this.sexes; 
 }
 public getSections() : String[] {
  return this.sections; 
 }
 public getMail(){
   return this.mail;
 }
 public setMail(mail : String){
   this.mail = mail;
 }
public verifLogin(login : String, passwd: String): boolean {
  for (var user of this.users) {
    if (user.mail==login && user.mdp==passwd) {
      return true;
    }
  }
  return false;
}
public addUser(user : User):boolean {
  this.users.push(user);
  return true;
}
public getUserNameByMail():String{
  for (var user of this.users) {
    if (user.mail == this.mail) {
      return user.prenom + " " + user.nom;
    } else{
      return "Monsieur X";
    }
}
}
}