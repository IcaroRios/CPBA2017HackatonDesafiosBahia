import { NativeStorageProvider } from './../../providers/native-storage/native-storage';
import { Candidato } from './../../model/candidato';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Vaga } from '../../model/vaga';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { PesosVagaPage } from '../pesos-vaga/pesos-vaga';

@Component({
  selector: 'page-nova-vaga',
  templateUrl: 'nova-vaga.html',
})
export class NovaVagaPage {

  private candidato: Candidato = new Candidato();
  private vaga: Vaga = new Vaga();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public native: NativeStorageProvider,
    private toastCtrl: ToastController,
    private fbService: FirebaseProvider
  ) {
    this.native.get("user").then(usuario => {
      this.candidato = usuario;
      this.vaga.empresa = usuario.nome;
      this.vaga.empresaKey = usuario.key;
      if (!this.vaga.cursoTecnico) {
        this.candidato.cursoTecnico = [{ nome: '' }];
      }
      if (!this.vaga.cursoSuperior) {
        this.candidato.cursoSuperior = [{ nome: '' }];
      }
      if (!this.vaga.posGraduacao) {
        this.candidato.posGraduacao = [{ nome: '' }];
      }
      if (!this.vaga.idiomas) {
        this.candidato.idiomas = [{ nome: '' }];
      }
      if (!this.vaga.habilidades) {
        this.candidato.habilidades = [{ nome: '' }];
      }
      if (!this.candidato.certificacoes) {
        this.candidato.certificacoes = [{ nome: '' }];
      }
    });
  }

  tecnico() {
    if (this.vaga.cursoTecnico[this.vaga.cursoTecnico.length - 1].nome != "") {
      this.vaga.cursoTecnico.push({ nome: '' });
    }
  }

  graduacao() {
    if (this.vaga.posGraduacao[this.vaga.posGraduacao.length - 1].nome != "") {
      this.vaga.posGraduacao.push({ nome: '' });
    }
  }

  superior() {
    if (this.vaga.cursoSuperior[this.vaga.cursoSuperior.length - 1].nome != "") {
      this.vaga.cursoSuperior.push({ nome: '' });
    }
  }

  idiomasF() {
    if (this.vaga.idiomas[this.vaga.idiomas.length - 1].nome != "") {
      this.vaga.idiomas.push({ nome: '' });
    }
  }

  habilidades() {
    if (this.vaga.habilidades[this.vaga.habilidades.length - 1].nome != "") {
      this.vaga.habilidades.push({ nome: '' });
    }
  }

  certificacao() {
    if (this.vaga.certificacoes[this.vaga.certificacoes.length - 1].nome != "") {
      this.vaga.certificacoes.push({ nome: '' });
    }
  }

  adicionarVaga() {
    this.navCtrl.push(PesosVagaPage, { vaga: this.vaga })
    // this.fbService.cadastrarVaga(this.vaga).then(()=>{
    //   this.mensagem("Vaga cadastrada");
    // });
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
