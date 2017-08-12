import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Vaga } from '../../model/vaga';
import { Candidato } from '../../model/candidato';
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

  private vaga: Vaga;
  private candidatos = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbProvider: FirebaseProvider
  ) {
    this.vaga = this.navParams.get('vaga');
    console.log(this.vaga);
    this.fbProvider.getCandidatos().subscribe(candidatos => {
      candidatos.map(candidato => {
        candidato.ocupacao.map(ocupacao => {
          if (ocupacao.nome == this.vaga.ocupacao) {
            this.calcularPeso(candidato);
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

  convidar(candidato) {

  }

  calcularPeso(candidato: Candidato) {
    let perdeu = "";
    candidato.peso = 100;
    if ((+this.vaga.pesoCertificacao) > 1) {
      this.vaga.certificacoes.map(certificado => {
        let existe = false;
        candidato.certificacoes.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          candidato.peso -= (+this.vaga.pesoCertificacao);
          perdeu += certificado.nome + ", "
        }
      });
    }

    if ((+this.vaga.pesoGenero) > 1) {
      if (this.vaga.genero != candidato.sexo) {
        candidato.peso -= (+this.vaga.pesoGenero);
      }
    }

    if ((+this.vaga.pesoHabilidade) > 1) {
      this.vaga.habilidades.map(certificado => {
        let existe = false;
        candidato.habilidades.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          candidato.peso -= (+this.vaga.pesoHabilidade);
          perdeu += certificado.nome + ", "
        }
      });
    }

    if ((+this.vaga.pesoHabilitacao) > 1) {
      if (this.vaga.habilitacao != candidato.habilitado) {
        candidato.peso -= (+this.vaga.pesoHabilitacao);
        perdeu += "habilitado, "
      }
    }

    if ((+this.vaga.pesoIdade) > 1) {
      let idade = (+candidato.dataNascimento.substring(0, 4)) - 2017;
      if ((+this.vaga.inicial) <= idade && (+this.vaga.final) >= idade) {
        candidato.peso -= (+this.vaga.pesoIdade);
        perdeu += "idade, "
      }
    }

    if ((+this.vaga.pesoIdioma) > 1) {
      this.vaga.idiomas.map(certificado => {
        let existe = false;
        candidato.idiomas.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          candidato.peso -= (+this.vaga.pesoIdioma);
          perdeu += certificado.nome + ", "
        }
      });
    }

    if ((+this.vaga.pesoPos) > 1) {
      this.vaga.posGraduacao.map(certificado => {
        let existe = false;
        candidato.posGraduacao.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          perdeu += certificado.nome + ", "
          candidato.peso -= (+this.vaga.posGraduacao);
        }
      });
    }

    if ((+this.vaga.pesoSuperior) > 1) {
      this.vaga.cursoSuperior.map(certificado => {
        let existe = false;
        candidato.cursoSuperior.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          perdeu += certificado.nome + ", "
          candidato.peso -= (+this.vaga.pesoSuperior);
        }
      });
    }

    if ((+this.vaga.pesoTecnico) > 1) {
      this.vaga.cursoTecnico.map(certificado => {
        let existe = false;
        candidato.cursoTecnico.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          perdeu += certificado.nome + ", "
          candidato.peso -= (+this.vaga.pesoTecnico);
        }
      });
    }
    console.log(candidato.nome, perdeu);

  }

}
