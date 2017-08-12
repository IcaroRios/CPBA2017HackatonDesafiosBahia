import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vaga } from '../../model/vaga';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';

/**
 * Generated class for the NovaVagaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-nova-vaga',
  templateUrl: 'nova-vaga.html',
})
export class NovaVagaPage {

  private vaga: Vaga = new Vaga();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public native: NativeStorageProvider
  ) {
    this.native.get("user").then(usuario => {
      this.vaga.empresa = usuario.nome;
      this.vaga.empresaKey = usuario.key;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaVagaPage');
  }

}
