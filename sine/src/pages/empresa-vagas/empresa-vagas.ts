import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Vaga } from '../../model/vaga';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
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
      this.fbService.getEmpresa().subscribe(empresa => {
        empresa.map(empresaAtual => {
          if (empresaAtual.$key == usuario.key) {
            this.vagas = empresaAtual.vagas;
            console.log(this.vagas);
          }
        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaVagasPage');
  }

}
