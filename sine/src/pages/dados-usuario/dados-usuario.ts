import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Candidato } from '../../model/candidato';
import { Http } from '@angular/http';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';

/**
 * Generated class for the DadosUsuarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-dados-usuario',
  templateUrl: 'dados-usuario.html',
})
export class DadosUsuarioPage {
  private candidato: Candidato = new Candidato();
  private senha: string = "";
  private repSenha: string = "";
  private profissao = "";


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private http: Http,
    private native: NativeStorageProvider,
    private fbService: FirebaseProvider
  ) {
    this.native.get('user').then(usuario => {
      this.candidato = usuario;
      
      if (!usuario.ocupacao){
        this.candidato.ocupacao = [{ nome: '' }];
      }
      console.log(this.candidato);
    });
  }

  ocupacao() {
    if (this.candidato.ocupacao[this.candidato.ocupacao.length - 1].nome != "") {
      this.candidato.ocupacao.push({ nome: '' });
    }
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
    if (!this.validarCPF()) {
      this.mensagem("CPF inválido");
    } else {
      console.log(this.candidato);
      this.fbService.updateCandidato(this.candidato.key, this.candidato).then(() => {
        this.mensagem("Alterado com sucesso");
        this.native.set("user", this.candidato);
      });
    }
  }

  validarCPF() {
   return true;
  }

  getProfissioes() {
    this.http.get("http://apps.diogomachado.com/api-profissoes/v1?callback=CALLBACK_JSONP&s=" + this.profissao)
      .toPromise().then(profissoes => {
        console.log(profissoes)
      });
  }
}
