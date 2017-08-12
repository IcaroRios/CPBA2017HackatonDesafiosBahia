import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Candidato } from '../../model/candidato';
import { CripSenhaProvider } from '../../providers/crip-senha/crip-senha';

/**
 * Generated class for the CadastroCandidatoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro-candidato',
  templateUrl: 'cadastro-candidato.html',
})
export class CadastroCandidatoPage {
  private candidato: Candidato = new Candidato();
  private senha: string = "";
  private repSenha: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbService: FirebaseProvider,
    private cripService: CripSenhaProvider,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCandidatoPage');
  }

  mensagem(mensagem) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  cadastrar() {
    if (!this.candidato.nome) {
      this.mensagem("Informe seu nome")
    } else if (!this.candidato.email) {
      this.mensagem("Informe o seu email")
    } else if (!this.senha) {
      this.mensagem("Informe o sua senha")
    } else if (this.repSenha != this.senha) {
      this.mensagem("Senhas Diferente")
    } else {
      this.candidato.senha = this.cripService.encode(this.senha);
      console.log(this.candidato);
      this.fbService.cadastrarCandidato(this.candidato).then(_ => {
        this.mensagem("Cadastro feito com sucesso");
        this.navCtrl.popToRoot();
      });
    }
  }


}