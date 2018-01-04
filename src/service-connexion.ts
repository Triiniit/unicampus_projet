import { Injectable } from '@angular/core';
import { User } from'./pages/register/register';
@Injectable()
export class ServiceConnexion {
    public users: User[] = [];
    constructor() { 
  }
/**
 * getUsers
 */
public getUsers() {
 return this.users; 
}
}
