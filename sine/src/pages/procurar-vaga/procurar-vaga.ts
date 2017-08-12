import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { VerVagaPage } from '../ver-vaga/ver-vaga';
/**
 * Generated class for the ProcurarVagaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-procurar-vaga',
  templateUrl: 'procurar-vaga.html',
})
export class ProcurarVagaPage {

  private vagas = [];
  private search = "";
  private vagasAux = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbService: FirebaseProvider
  ) {
    this.fbService.getVagasCandidato().subscribe(vagas => {
      this.vagas = vagas;
      this.initializeItems();
    });
  }

  initializeItems() {
    this.vagasAux = this.vagas;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcurarVagaPage');
  }

  getItems() {
    // Reset items back to all of the items
    // set val to the value of the searchbar

    // if the value is an empty string don't filter the items
    this.vagas = this.vagasAux.filter((item) => {
      return (item.ocupacao.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    })
  }

  abrirVaga(vaga) {
    this.navCtrl.push(VerVagaPage, { vaga: vaga })
  }




}
