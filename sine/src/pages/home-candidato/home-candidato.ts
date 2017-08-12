import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { LoginPage } from '../login/login';
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
  private usuario = undefined;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nativeStorage: NativeStorageProvider
  ) {
    this.nativeStorage.get('user').then(usuario => {
      if (usuario) {
        this.usuario = usuario;
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
    }).catch(() => this.navCtrl.setRoot(LoginPage));
  }

  abrirPage(page) {
    this.navCtrl.push(page);
  }

}
