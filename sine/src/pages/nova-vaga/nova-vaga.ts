import { NativeStorageProvider } from './../../providers/native-storage/native-storage';
import { Candidato } from './../../model/candidato';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NovaVagaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-vaga',
  templateUrl: 'nova-vaga.html',
})
export class NovaVagaPage {

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

  certificacoes() {
    if (this.candidato.certificacoes[this.candidato.certificacoes.length - 1].nome != "") {
      this.candidato.certificacoes.push({ nome: '' });
    }
  }

}
