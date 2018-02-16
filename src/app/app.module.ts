import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {HttpClientModule}  from '@angular/common/http';
import { MyApp } from './app.component';

import { HorrairePage } from '../pages/horraire/horraire';
import { ActualitePage } from '../pages/actualite/actualite';
import { HomePage } from '../pages/home/home';
import { BonplansPage } from '../pages/bonplans/bonplans';
import { SoireePage } from '../pages/soiree/soiree';
import { SigninPage } from "../pages/signin/signin";
import { RegisterPage } from "../pages/register/register";
import { TabsPage } from '../pages/tabs/tabs';
import { ServiceConnexion } from './../service-connexion';
import { ServiceServeur } from'./../service-serveur';
import{ ActuPublicationPage } from '../pages/actuPublication/actuPublication';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HorrairePage,
    ActualitePage,
    BonplansPage,
    HomePage,
    SigninPage,
    SoireePage,
    RegisterPage,
    TabsPage,
    ActuPublicationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HorrairePage,
    ActualitePage,
    BonplansPage,
    HomePage,
    SigninPage,
    SoireePage,
    RegisterPage,
    TabsPage,
    ActuPublicationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceConnexion,
    ServiceServeur,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
