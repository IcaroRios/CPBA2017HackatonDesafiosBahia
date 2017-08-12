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
      console.log(this.candidato);
    });
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
    if (this.candidato.cpf) {
      if (this.candidato.cpf.length == 11) {
        let numero = this.candidato.cpf.toString();
        let ultimoDigito = 0;
        let penultimoDigito = 0;
        for (let i = 0; i < 10; i++) {
          if (i < 9) {
            penultimoDigito += (+numero[i] * (10 - i));
            ultimoDigito += (+numero[i] * (11 - i));
          } else
            ultimoDigito += (+numero[i] * (11 - i));
        }
        penultimoDigito = penultimoDigito * 10;
        ultimoDigito = ultimoDigito * 10;

        penultimoDigito = penultimoDigito % 11;
        ultimoDigito = ultimoDigito % 11;
        if (penultimoDigito.toString() == numero[numero.length - 2] && ultimoDigito.toString() == numero[numero.length - 1])
          return true;
        else
          return false;

      } else {
        this.mensagem("CPF invalido");
      }
    }
  }

  getProfissioes() {
    this.http.get("http://apps.diogomachado.com/api-profissoes/v1?callback=CALLBACK_JSONP&s=" + this.profissao)
      .toPromise().then(profissoes => {
        console.log(profissoes)
      });
  }
}
