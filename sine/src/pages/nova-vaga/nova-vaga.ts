import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Vaga } from '../../model/vaga';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the NovaVagaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-nova-vaga',
  templateUrl: 'nova-vaga.html',
})
export class NovaVagaPage {

  private vaga: Vaga = new Vaga();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public native: NativeStorageProvider,
    private toastCtrl: ToastController,
    private fbService: FirebaseProvider
  ) {
    this.native.get("user").then(usuario => {
      this.vaga.empresa = usuario.nome;
      this.vaga.empresaKey = usuario.key;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaVagaPage');
  }

  adicionarVaga() {
    this.fbService.cadastrarVaga(this.vaga).then(()=>{
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
