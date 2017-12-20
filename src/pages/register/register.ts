import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SigninPage} from "../signin/signin";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }
  login() {
    this.navCtrl.push(SigninPage);
  }
}