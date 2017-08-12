import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { Agendamento } from '../../model/agendamento';

/**
 * Generated class for the CandidatoAgendamentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-candidato-agendamento',
  templateUrl: 'candidato-agendamento.html',
})
export class CandidatoAgendamentoPage {

  private agendamentos: Agendamento[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbService: FirebaseProvider,
    private nativeStorage: NativeStorageProvider
  ) {
    this.nativeStorage.get('user').then(res => {
      this.fbService.getAgendamentosCandidato(res.key).subscribe(agendamentos => {
        this.agendamentos = agendamentos;
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatoAgendamentoPage');
  }

  cancelar(agenda){
    this.fbService.cancelarAgendamento(agenda);
  }


}
