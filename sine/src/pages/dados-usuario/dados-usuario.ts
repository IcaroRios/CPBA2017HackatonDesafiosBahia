import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Candidato } from '../../model/candidato';
/**
 * Generated class for the DadosUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-usuario',
  templateUrl: 'dados-usuario.html',
})
export class DadosUsuarioPage {
  private candidato: Candidato = new Candidato();
  private senha: string = "";
  private repSenha: string = "";


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
  ) {
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosUsuarioPage');
  }
  salvarInformacoes() {   

  }
}
