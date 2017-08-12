import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { LoginPage } from '../login/login';
import { EmpresaAgendamentoPage } from '../empresa-agendamento/empresa-agendamento';
import { EmpresaVagasPage } from '../empresa-vagas/empresa-vagas';
import { EmpresaPedidosPage } from '../empresa-pedidos/empresa-pedidos';

/**
 * Generated class for the EmpresaHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-empresa-home',
  templateUrl: 'empresa-home.html',
})
export class EmpresaHomePage {

  private usuario = undefined;
  agendamentoPage = EmpresaAgendamentoPage;
  vagasPage = EmpresaVagasPage;
  pedidosPage = EmpresaPedidosPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nativeStorage: NativeStorageProvider

  ) {
    this.nativeStorage.get('user').then(usuario => {
      if (usuario) {
        this.usuario = usuario;
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
    }).catch(() => this.navCtrl.setRoot(LoginPage));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaHomePage');
  }

  abrirPage(page) {
    this.navCtrl.push(page);
  }

  logout(){
    this.nativeStorage.logout("user");
    this.navCtrl.setRoot(LoginPage);
  }

}
