import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
/**
 * Generated class for the HomeCandidatoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-candidato',
  templateUrl: 'home-candidato.html',
})
export class HomeCandidatoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }
  
  redirecionarAgendamentos() {
    //this.navCtrl.push(Agendamentos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCandidatoPage');
  }

}
