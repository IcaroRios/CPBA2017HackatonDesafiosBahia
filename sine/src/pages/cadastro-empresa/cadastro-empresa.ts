import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Empresa } from '../../model/empresa';
import { CripSenhaProvider } from '../../providers/crip-senha/crip-senha';
/**
 * Generated class for the CadastroEmpresaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-empresa',
  templateUrl: 'cadastro-empresa.html',
})
export class CadastroEmpresaPage {
  private empresa: Empresa = new Empresa();
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

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  cadastrar(){
    if(!this.empresa.nome){
      this.mensagem("Informe seu nome.");
    }
    if(!this.empresa.CNPJ){
      this.mensagem("Informe o seu CNPJ.");
    }
    if(!this.empresa.email){
      this.mensagem("Informe o seu e-mail.");
    }
    if(!this.senha){
      this.mensagem("Informe a sua senha.");
    }
    if(!this.repSenha){
      this.mensagem("Repita a sua senha.");
    }
    if(this.senha ==this.repSenha){
      this.empresa.senha = this.cripService.encode(this.senha);
      console.log(this.empresa);
      this.fbService.cadastrarEmpresa(this.empresa).then(_ => {
        this.mensagem("Cadastro feito com sucesso");
        //this.navCtrl.pop();
      });
    }else{
      this.mensagem("As senhas estão diferentes.");
    }
  }

}
