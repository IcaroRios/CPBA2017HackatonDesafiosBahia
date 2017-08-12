import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
/**
 * Generated class for the EmpresaPedidosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-empresa-pedidos',
  templateUrl: 'empresa-pedidos.html',
})
export class EmpresaPedidosPage {

  private convites = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbServe: FirebaseProvider,
    private native: NativeStorageProvider
  ) {
    this.native.get('user').then(usuario=>{
      this.fbServe.getConviteEmpresa(usuario.key).subscribe(convite=>{
        this.convites = convite;
        console.log(usuario.key);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPedidosPage');
  }

  recusar(convite){
    this.fbServe.removerConvite(convite);
  }

  aceitar(convite){
    this.fbServe.agendar(convite);
  }

}
