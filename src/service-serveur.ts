import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { User } from './user';
@Injectable()
export class ServiceServeur {
    private users: User[] = [];
    private unicampusUrlVerifyUserConnection = '39d7d416aef4336b3fee5031f9d57b6.testing-url.ws/api/users/login';
    // private villes: String[] = ["Auch","Castres", "Tarbes", "Toulouse"];
    //private sexes: String[] = ["Homme", "Femme"];
    //private sections: String[] = ["MMI", "TC"];
    private mail: String;
    private headers;
    // ici c'est le service angular qui permets de faire le lien avec la base de données pour la création 
    //d'utilisateur et la connexion
    constructor(private http:HttpClient) {
       // this.headers = new HttpHeaders({'Content-type': 'application/json','Authorization' : 'Bearer '+ this.token});
    }
    /**
     * getUsers
     */
    /*public getUsers(): User[] {
        return this.users;
    }
    public getVilles(): String[] {
        return this.villes;
    }
    public getSexes(): String[] {
        return this.sexes;
    }
    public getSections(): String[] {
        return this.sections;
    }*/
    public getMail() {
        return this.mail;
    }
    public setMail(mail: String) {
        this.mail = mail;
    }
    public verifLogin(login: String, passwd: String) { 
                return this.http.get(this.unicampusUrlVerifyUserConnection+login+passwd); 
            //get(this.unicampusUrlVerifyUserConnection+login+passwd, { headers : this.headers})
    }
    public addUser(user: User): boolean {
        this.users.push(user);
        return true;
    }
    /*public getUserNameByMail(): String {
        for (var user of this.users) {
            if (user.mail == this.mail) {
                return user.prenom + " " + user.nom;
            } else {
                return "Monsieur X";
            }
        }
    }*/
}