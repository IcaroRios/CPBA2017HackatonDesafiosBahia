import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { Agendamento } from '../../model/agendamento';
/**
 * Generated class for the EmpresaAgendamentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-empresa-agendamento',
  templateUrl: 'empresa-agendamento.html',
})
export class EmpresaAgendamentoPage {

  private agendamentos: Agendamento[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fbService: FirebaseProvider,
    private nativeStorage: NativeStorageProvider
  ) {
    this.nativeStorage.get('user').then(res=>{
      this.fbService.getAgendamentosEmpresa(res.key).subscribe(agendamentos=>{
        this.agendamentos = agendamentos;
      });
    });
    // let agenda = new Agendamento();
    // agenda.data = "2017-11-11";
    // agenda.empresa = "-KrHZxYCare1RSZd5uwn";
    // agenda.usuario = "-KrHWiHEHFZjOofAWykA";
    // agenda.vaga = "analista";
    // this.fbService.agendar(agenda);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaAgendamentoPage');
  }

  cancelar(agenda){
    this.fbService.cancelarAgendamento(agenda);
  }

}
