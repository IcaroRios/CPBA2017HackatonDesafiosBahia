import { NativeStorageProvider } from './../../providers/native-storage/native-storage';
import { Candidato } from './../../model/candidato';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private native: NativeStorageProvider) {
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
        this.candidato.certificacoes.push({ nome: '' });
      }
    });
  }

  certificacoes() {
    if (this.candidato.certificacoes[this.candidato.certificacoes.length - 1].nome != "") {
      this.candidato.certificacoes.push({ nome: '' });
    }
  }

}
