import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Empresa } from '../../model/empresa';
import { CripSenhaProvider } from '../../providers/crip-senha/crip-senha';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the CadastroEmpresaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro-empresa',
  templateUrl: 'cadastro-empresa.html',
})
export class CadastroEmpresaPage {
  private empresa: Empresa = new Empresa();
  private senha: string = "";
  private repSenha: string = "";
  private headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbService: FirebaseProvider,
    private cripService: CripSenhaProvider,
    private toastCtrl: ToastController,
    private http: Http
  ) {
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  pesquisarEmpresa() {
    if (this.empresa.CNPJ) {
      this.empresa.nome = "";
      this.http.get("https://www.receitaws.com.br/v1/cnpj/" + this.empresa.CNPJ, { headers: this.headers })
        .toPromise()
        .then(response => {
          if (response.json().nome) {
            this.empresa.nome = response.json().nome
          } else {
            this.mensagem(response.json().message);
          }
        })
        .catch((error) => this.mensagem("erro ao buscar cnpj"));
    }
  }

  cadastrar() {
    if (!this.empresa.nome) {
      this.mensagem("Informe seu nome.");
    }
    if (!this.empresa.CNPJ) {
      this.mensagem("Informe o seu CNPJ.");
    }
    if (!this.empresa.email) {
      this.mensagem("Informe o seu e-mail.");
    }
    if (!this.senha) {
      this.mensagem("Informe a sua senha.");
    }
    if (!this.repSenha) {
      this.mensagem("Repita a sua senha.");
    }
    if (this.senha == this.repSenha) {
      if (this.empresa.CNPJ) {
        this.http.get("https://www.receitaws.com.br/v1/cnpj/" + this.empresa.CNPJ, { headers: this.headers })
          .toPromise()
          .then(response => {
            if (response.json().nome) {
              if (this.empresa.nome == response.json().nome) {
                this.empresa.senha = this.cripService.encode(this.senha);
                console.log(this.empresa);
                this.fbService.cadastrarEmpresa(this.empresa).then(_ => {
                  this.mensagem("Cadastro feito com sucesso");
                  //this.navCtrl.pop();
                });
              } else {
                this.mensagem("Nome de empresa está incoerente");
              }
            } else {
              this.mensagem(response.json().message);
            }
          })
          .catch((error) => this.mensagem("erro ao buscar cnpj"));
      }
    } else {
      this.mensagem("As senhas estão diferentes.");
    }
  }

}
