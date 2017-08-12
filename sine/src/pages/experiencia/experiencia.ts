import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Candidato } from './../../model/candidato';
import { NativeStorageProvider } from './../../providers/native-storage/native-storage';
import { FirebaseProvider } from './../../providers/firebase/firebase';
/**
 * Generated class for the ExperienciaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-experiencia',
  templateUrl: 'experiencia.html',
})
export class ExperienciaPage {

  private candidato: Candidato = new Candidato();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeStorageProvider,
    private fbService: FirebaseProvider,
    private toastCtrl: ToastController
  ) {
    this.native.get("user").then(usuario => {
      this.candidato = usuario;
      console.log(this.candidato);
      if (!usuario.experiencia) {
        this.candidato.experiencias = [{ cargo: '', fontedenIformacao: '', menorAprendiz:'' }];
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperienciaPage');
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  cadastrar() {
    if (this.candidato.experiencias) {
      console.log(this.candidato.experiencias);
      this.fbService.updateCandidato(this.candidato.key, this.candidato).then(() => {
        this.mensagem("Adicionado com sucesso");
        this.native.set("user", this.candidato);
      });
    }
  }

}
