import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerVagaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ver-vaga',
  templateUrl: 'ver-vaga.html',
})
export class VerVagaPage {

  private vaga;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vaga = this.navParams.get("vaga");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerVagaPage');
  }

}
