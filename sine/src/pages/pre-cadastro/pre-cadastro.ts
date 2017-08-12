import { CadastroEmpresaPage } from './../cadastro-empresa/cadastro-empresa';
import { CadastroCandidatoPage } from './../cadastro-candidato/cadastro-candidato';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreCadastroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-cadastro',
  templateUrl: 'pre-cadastro.html',
})
export class PreCadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  candidato(){
    this.navCtrl.push(CadastroCandidatoPage);
  }
  empresa(){
    this.navCtrl.push(CadastroEmpresaPage);
  }

}
