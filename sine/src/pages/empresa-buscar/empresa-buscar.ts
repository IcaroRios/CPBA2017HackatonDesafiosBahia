import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Vaga } from '../../model/vaga';
import { Agendamento } from '../../model/agendamento';
import { Candidato } from '../../model/candidato';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
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
  private usuario;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fbProvider: FirebaseProvider,
    private native: NativeStorageProvider,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.vaga = this.navParams.get('vaga');
    this.fbProvider.getCandidatos().subscribe(candidatos => {
      candidatos.map(candidato => {
        candidato.ocupacao.map(ocupacao => {
          if (ocupacao.nome == this.vaga.ocupacao) {
            this.calcularPeso(candidato);
            this.candidatos.push(candidato);
          }
        });
      });
    });

    this.native.get('user').then(usuario => {
      this.usuario = usuario;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaBuscarPage');
  }

   mensagem(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  convidar(candidato, dados) {
    console.log(dados);
    let convite = new Agendamento();
    convite.data = dados.data;
    convite.local = dados.local;
    convite.empresaNome = this.usuario.nome;
    convite.empresa = this.usuario.key;
    convite.usuario = candidato.$key;
    convite.usuarioNome = candidato.nome;
    convite.vaga = this.vaga.ocupacao;
    this.fbProvider.agendar(convite).then(() => {
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
