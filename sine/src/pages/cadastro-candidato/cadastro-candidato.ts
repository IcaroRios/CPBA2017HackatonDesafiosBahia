import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Candidato } from '../../model/candidato';
/**
 * Generated class for the CadastroCandidatoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-candidato',
  templateUrl: 'cadastro-candidato.html',
})
export class CadastroCandidatoPage {
  private candidato: Candidato = new Candidato();
  private senha:string = "";
  private repSenha:string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fbService: FirebaseProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCandidatoPage');
  }

}
// .then(_ => {
//         this.showMessage("Ordem de serviço editada com sucesso");
//         this.navCtrl.pop();
//       });