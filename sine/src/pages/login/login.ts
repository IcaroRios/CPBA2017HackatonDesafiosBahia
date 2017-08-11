import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { CripSenhaProvider } from '../../providers/crip-senha/crip-senha';
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
    public cripService: CripSenhaProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logar(){
    this.fbService.loginUsuario(this.email).subscribe(res=>{
      console.log(res);
    });
  }

}
