import { FeedbackPage } from './../feedback/feedback';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DadosUsuarioPage } from '../dados-usuario/dados-usuario';
import { CompetenciasPage } from '../competencias/competencias';
import { CertificacoesPage } from '../certificacoes/certificacoes';
import { ExperienciaPage } from '../experiencia/experiencia';

@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html',
})
export class PerfilUsuarioPage {

  dadosPage = DadosUsuarioPage;
  competenciaPage = CompetenciasPage;
  certificacoesPage = CertificacoesPage;
  experienciaPage = ExperienciaPage;
  feedbackPage = FeedbackPage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilUsuarioPage');
  }

  abrirPage(page) {
    this.navCtrl.push(page);
  }

}
