import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmpresaBuscarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-empresa-buscar',
  templateUrl: 'empresa-buscar.html',
})
export class EmpresaBuscarPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaBuscarPage');
  }

}
