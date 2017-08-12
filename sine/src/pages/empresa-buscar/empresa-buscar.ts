import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Vaga } from '../../model/vaga';
/**
 * Generated class for the EmpresaBuscarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-empresa-buscar',
  templateUrl: 'empresa-buscar.html',
})
export class EmpresaBuscarPage {

  private vaga:Vaga;
  private candidatos=[];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbProvider: FirebaseProvider
  ) {
    this.vaga = this.navParams.get('vaga');
    console.log(this.vaga);
    this.fbProvider.getCandidatos().subscribe(candidatos=>{
      candidatos.map(candidato=>{
        candidato.ocupacao.map(ocupacao=>{
          if(ocupacao.nome == this.vaga.ocupacao){
            this.candidatos.push(candidato);
          }
        });
      });
      console.log(this.candidatos);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaBuscarPage');
  }

  convidar(candidato){
    
  }

}
