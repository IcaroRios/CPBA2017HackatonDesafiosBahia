import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Candidato } from '../../model/candidato';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
/**
 * Generated class for the CompetenciasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-competencias',
  templateUrl: 'competencias.html',
})
export class CompetenciasPage {

  private candidato: Candidato = new Candidato();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbService: FirebaseProvider,
    private native: NativeStorageProvider,
    private toastCtrl: ToastController,
  ) {
    this.native.get("user").then(usuario => {
      this.candidato = usuario;
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetenciasPage');
  }

  tecnico() {
    if (this.candidato.cursoTecnico[this.candidato.cursoTecnico.length - 1].nome != "") {
      this.candidato.cursoTecnico.push({ nome: '' });
    }
  }

  graduacao() {
    if (this.candidato.posGraduacao[this.candidato.posGraduacao.length - 1].nome != "") {
      this.candidato.posGraduacao.push({ nome: '' });
    }
  }

  superior() {
    if (this.candidato.cursoSuperior[this.candidato.cursoSuperior.length - 1].nome != "") {
      this.candidato.cursoSuperior.push({ nome: '' });
    }
  }

  idiomasF() {
    if (this.candidato.idiomas[this.candidato.idiomas.length - 1].nome != "") {
      this.candidato.idiomas.push({ nome: '' });
    }
  }

  habilidades() {
    if (this.candidato.habilidades[this.candidato.habilidades.length - 1].nome != "") {
      this.candidato.habilidades.push({ nome: '' });
    }
  }

  salvarInformacoes() {
    console.log(this.candidato);
    this.fbService.updateCandidato(this.candidato.key, this.candidato).then(() => {
      this.mensagem("Alterado com sucesso");
      this.native.set("user", this.candidato);
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
