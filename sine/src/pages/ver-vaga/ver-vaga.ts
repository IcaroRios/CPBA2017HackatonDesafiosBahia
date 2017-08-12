import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { NativeStorageProvider } from './../../providers/native-storage/native-storage';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Vaga } from './../../model/vaga';
import { Convite } from '../../model/convite';
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
  private usuario;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private native: NativeStorageProvider,
    private fbService: FirebaseProvider,
    private toastCtrl: ToastController
  ) {
    this.vaga = this.navParams.get('vaga');
    console.log(this.vaga);

    this.native.get('user').then(res=>{
      this.usuario = res;
    });

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

  cadidatar(){
    let convite = new Convite();
    convite.empresa = this.vaga.empresaKey;
    convite.empresaNome = this.vaga.empresa;
    convite.usuario = this.usuario.key;
    convite.usuarioNome = this.usuario.nome;
    this.fbService.cadastrarConvite(convite).then(()=>{
      this.mensagem("Voce se candidatou a vaga com sucesso");
    });
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
