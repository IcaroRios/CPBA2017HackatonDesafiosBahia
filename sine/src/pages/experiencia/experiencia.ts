import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Candidato } from './../../model/candidato';
import { NativeStorageProvider } from './../../providers/native-storage/native-storage';
import { FirebaseProvider } from './../../providers/firebase/firebase';
/**
 * Generated class for the ExperienciaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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
      if (!this.candidato.experiencias) {
        this.candidato.experiencias = [{ cargo: '', fontedenIformacao: '', menorAprendiz:'' }];
      }
      this.experienciasF();
    });
  }


  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  experienciasF() {
    if (this.candidato.experiencias[this.candidato.experiencias.length - 1].cargo != "") {
      this.candidato.experiencias.push({ cargo: '', fontedenIformacao: '', menorAprendiz:'' });
    }
  }

  cadastrar() {
    if (this.candidato.experiencias) {
      this.fbService.updateCandidato(this.candidato.key, this.candidato).then(() => {
        this.mensagem("Adicionado com sucesso");
        this.native.set("user", this.candidato);
      });
    }
  }

}
