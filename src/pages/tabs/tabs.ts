import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActualitePage } from '../actualite/actualite';
import { HorrairePage } from '../horraire/horraire';
import { BonplansPage } from '../bonplans/bonplans';
import { SoireePage } from '../soiree/soiree';
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //gestions des root des tables (pour les lien redirection vers tel ou tel page)
  tab1Root = ActualitePage;
  tab2Root = HorrairePage;
  tab3Root = BonplansPage;
  tab4Root = SoireePage;

  constructor(public navCtrl: NavController){}
}