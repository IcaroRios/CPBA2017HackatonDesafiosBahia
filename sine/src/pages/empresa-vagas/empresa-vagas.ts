import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Vaga } from '../../model/vaga';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { NovaVagaPage } from '../nova-vaga/nova-vaga';
import { EmpresaBuscarPage } from '../empresa-buscar/empresa-buscar';
/**
 * Generated class for the EmpresaVagasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-empresa-vagas',
  templateUrl: 'empresa-vagas.html',
})
export class EmpresaVagasPage {

  private vagas: Vaga[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbService: FirebaseProvider,
    private nativeStorage: NativeStorageProvider
  ) {
    this.nativeStorage.get('user').then(usuario => {
      this.fbService.getVagasEmpresa(usuario.key)
      .subscribe(vaga=>{
        this.vagas = vaga;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaVagasPage');
  }

  novaVaga(){
    this.navCtrl.push(NovaVagaPage);
  }

  buscarVaga(vaga){
    this.navCtrl.push(EmpresaBuscarPage, {vaga: vaga})
  }

}
