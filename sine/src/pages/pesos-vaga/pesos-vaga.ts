import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Vaga } from '../../model/vaga';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the PesosVagaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pesos-vaga',
  templateUrl: 'pesos-vaga.html',
})
export class PesosVagaPage {
  private vaga: Vaga;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private fbService: FirebaseProvider
  ) {
    this.vaga = this.navParams.get('vaga');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesosVagaPage');
  }

  adicionarVaga() {
    this.fbService.cadastrarVaga(this.vaga).then(() => {
      this.mensagem("Vaga cadastrada");
    });
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
