import { NativeStorageProvider } from './../../providers/native-storage/native-storage';
import { Candidato } from './../../model/candidato';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the CertificacoesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-certificacoes',
  templateUrl: 'certificacoes.html',
})
export class CertificacoesPage {

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
      if (!usuario.cursoTecnico) {
        this.candidato.cursoTecnico = [{ nome: '' }];
      }
      if (!usuario.cursoSuperior) {
        this.candidato.cursoSuperior = [{ nome: '' }];
      }
      if (!usuario.posGraduacao) {
        this.candidato.posGraduacao = [{ nome: '' }];
      }
      if (!usuario.idiomas) {
        this.candidato.idiomas = [{ nome: '' }];
      }
      if (!usuario.habilidades) {
        this.candidato.habilidades = [{ nome: '' }];
      }
      if (!this.candidato.certificacoes) {
        this.candidato.certificacoes = [{ nome: '' }];
      }
    });
  }

  certificacao() {
    if (this.candidato.certificacoes[this.candidato.certificacoes.length - 1].nome != "") {
      this.candidato.certificacoes.push({ nome: '' });
    }
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  cadastrar() {
    if (this.candidato.certificacoes) {
      console.log(this.candidato);
      this.fbService.updateCandidato(this.candidato.key, this.candidato).then(() => {
        this.mensagem("Adicionado com sucesso");
        this.native.set("user", this.candidato);
      });
    }
  }

}
