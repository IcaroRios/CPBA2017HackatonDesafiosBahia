import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorageProvider } from './../../providers/native-storage/native-storage';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Vaga } from './../../model/vaga';
/**
 * Generated class for the VerVagaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ver-vaga',
  templateUrl: 'ver-vaga.html',
})
export class VerVagaPage {

  private vaga: Vaga = new Vaga();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeStorageProvider,
    private fbService: FirebaseProvider
  ) {
    this.vaga = this.navParams.get('vaga');
    console.log(this.vaga);

    if (!this.vaga.cursoTecnico) {
      this.vaga.cursoTecnico = [{ nome: '' }];
    } if (!this.vaga.cursoSuperior) {
      this.vaga.cursoSuperior = [{ nome: '' }];
    } if (!this.vaga.posGraduacao) {
      this.vaga.posGraduacao = [{ nome: '' }];
    } if (!this.vaga.habilidades) {
      this.vaga.habilidades = [{ nome: '' }];
    } if(!this.vaga.certificacoes){
      this.vaga.certificacoes = [{nome: ''}];
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerVagaPage');
  }

}
