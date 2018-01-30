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
      this.mdp = mdp;
    }
  }