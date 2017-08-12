import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { Agendamento } from '../../model/agendamento';
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
    private native: NativeStorageProvider,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.native.get('user').then(usuario => {
      this.fbServe.getConviteEmpresa(usuario.key).subscribe(convite => {
        this.convites = convite;
        console.log(usuario.key);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPedidosPage');
  }

  recusar(convite) {
    this.fbServe.removerConvite(convite).then(() => {
      this.mensagem("removido com sucesso");
    });
  }

  convidar(convite, dados) {
    this.fbServe.agendar(convite);
    convite.data = dados.data;
    convite.local = dados.local;
    this.fbServe.agendar(convite).then(() => {
      this.mensagem("removido com sucesso");
      this.fbServe.removerConvite(convite);
      this.mensagem("Agendamento feito com sucesso!")
    });
  }

  alertData(candidato) {
    let prompt = this.alertCtrl.create({
      title: 'Convite',
      message: "Informe a data e o local",
      inputs: [
        {
          name: 'data',
          placeholder: 'Data'
        },
        {
          name: 'local',
          placeholder: 'Local'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.convidar(candidato, data);
          }
        }
      ]
    });
    prompt.present();
  }

  mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
