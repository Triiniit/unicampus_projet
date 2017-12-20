import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})


export class SigninPage {

  constructor(public navCtrl: NavController) {

  }
  registerPage() {
    this.navCtrl.push(RegisterPage);
  }
}
