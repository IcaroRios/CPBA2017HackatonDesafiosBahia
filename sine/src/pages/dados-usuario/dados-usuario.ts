import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Candidato } from '../../model/candidato';
/**
 * Generated class for the DadosUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-usuario',
  templateUrl: 'dados-usuario.html',
})
export class DadosUsuarioPage {
  private candidato: Candidato = new Candidato();
  private senha: string = "";
  private repSenha: string = "";


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
  ) {
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosUsuarioPage');
  }
  salvarInformacoes() {
    if (!this.candidato.numeroIdentificacao) {
      this.mensagem("Informe sua indentificação")
    }
    if (!this.candidato.nomeMae) {
      this.mensagem("Informe o nome de sua mãe")
    } if (!this.candidato.sexo) {
      this.mensagem("Informe seu sexo")
    } if (!this.candidato.raca) {
      this.mensagem("Informe sua raça")
    } if (!this.candidato.dataNascimento) {
      this.mensagem("informe sua data de nascimento")
    } if (!this.candidato.estadoCivil) {
      this.mensagem("informe seu estado civil")
    }if(!this.candidato.nacionalidade){
      this.mensagem("informe sua nacionalidade")
    }if(!this.candidato.naturalidade){
      this.mensagem("informe sua naturalidade")
    }if(!this.candidato.uf){
      this.mensagem("informe seu UF")
    }
    

  }
}
