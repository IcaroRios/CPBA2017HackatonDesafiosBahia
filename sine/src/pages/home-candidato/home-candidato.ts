import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
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

  perfilPage = PerfilUsuarioPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  abrirPage(page) {
    this.navCtrl.push(page);
  }
}
