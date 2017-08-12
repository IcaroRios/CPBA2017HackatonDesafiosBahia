import { PreCadastroPage } from './../pre-cadastro/pre-cadastro';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CripSenhaProvider } from '../../providers/crip-senha/crip-senha';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { HomeCandidatoPage } from '../home-candidato/home-candidato';
import { EmpresaHomePage } from '../empresa-home/empresa-home';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private email: string = "";
  private senha: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fbService: FirebaseProvider,
    public cripService: CripSenhaProvider,
    private toastCtrl: ToastController,
    private nativeStorage: NativeStorageProvider

  ) {
  }

  logar() {
    this.fbService.loginUsuario(this.email).subscribe(res => {
      if (!res.length) {//procura se é uma empresa
        this.fbService.loginEmpresa(this.email).subscribe(response => {
          console.log(response);
          if (!response.length) {
            this.mensagem("Email não esta cadastrado no sistema");
          } else { //empresa
            if (this.cripService.encode(this.senha) == response[0].senha) {
              let usuario = response[0];
              usuario.key = response[0].$key;
              this.nativeStorage.set("user", usuario).then(() => {
                this.navCtrl.setRoot(EmpresaHomePage);
              });
            } else {
              this.mensagem("senha incorreta");
            }
          }
        });
      } else { //candidato
        if (this.cripService.encode(this.senha) == res[0].senha) {
          let usuario = res[0];
          usuario.key = res[0].$key;
          this.nativeStorage.set("user", usuario).then(() => {
            this.navCtrl.setRoot(HomeCandidatoPage);
          });
        } else {
          this.mensagem("senha incorreta");
        }
      }
    });
  }
  cadastrar(){
    this.navCtrl.push(PreCadastroPage);
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
