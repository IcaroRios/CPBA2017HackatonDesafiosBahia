import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { NativeStorageProvider } from '../../providers/native-storage/native-storage';
import { LoginPage } from '../login/login';
import { Vaga } from '../../model/vaga';
/**
 * Generated class for the HomeCandidatoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-candidato',
  templateUrl: 'home-candidato.html',
})
export class HomeCandidatoPage {

  perfilPage = PerfilUsuarioPage;
  private usuario = undefined;
  private empregos: Vaga[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nativeStorage: NativeStorageProvider,
    private fbService: FirebaseProvider
  ) {
    this.nativeStorage.get('user').then(usuario => {
      if (usuario) {
        this.usuario = usuario;
        console.log(this.usuario);
      } else {
        this.navCtrl.setRoot(LoginPage);
      }
    }).catch(() => this.navCtrl.setRoot(LoginPage));


    this.nativeStorage.get("user").then(userAtual => {
      this.fbService.getCandidatos().subscribe(usuario => {
        usuario.map(usuarioAtual => {
          if (usuarioAtual.$key == userAtual.key) {
            userAtual = usuarioAtual;
            userAtual.key = usuarioAtual.$key;
            this.nativeStorage.set('user', userAtual);
            this.usuario = userAtual;
            this.getVagas();
          }
        });
      });
    });
  }

  getVagas() {
    this.fbService.getVagasCandidato().subscribe(vaga => {
      this.usuario.ocupacao.map(profissaoAtual => {
        vaga.map(vagaAtual => {
          this.calcularPeso(this.usuario, vagaAtual);
          if (vagaAtual.ocupacao == profissaoAtual.nome) {
            if (this.empregos.indexOf(vagaAtual) < 0) {
              this.empregos.push(vagaAtual);
            }
          }
        });
      });
    });
  }

  abrirPage(page) {
    this.navCtrl.push(page);
  }

  calcularPeso(candidato, vaga) {
    let perdeu = "";
    vaga.peso = 100;
    if ((+ vaga.pesoCertificacao) > 1) {
      vaga.certificacoes.map(certificado => {
        let existe = false;
        candidato.certificacoes.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          vaga.peso -= (+ vaga.pesoCertificacao);
          perdeu += certificado.nome + ", "
        }
      });
    }

    if ((+ vaga.pesoGenero) > 1) {
      if (vaga.genero != candidato.sexo) {
        vaga.peso -= (+ vaga.pesoGenero);
      }
    }

    if ((+ vaga.pesoHabilidade) > 1) {
      vaga.habilidades.map(certificado => {
        let existe = false;
        candidato.habilidades.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          vaga.peso -= (+ vaga.pesoHabilidade);
          perdeu += certificado.nome + ", "
        }
      });
    }

    if ((+ vaga.pesoHabilitacao) > 1) {
      if (vaga.habilitacao != candidato.habilitado) {
        vaga.peso -= (+ vaga.pesoHabilitacao);
        perdeu += "habilitado, "
      }
    }

    if ((+ vaga.pesoIdade) > 1) {
      let idade = (+candidato.dataNascimento.substring(0, 4)) - 2017;
      if ((+ vaga.inicial) <= idade && (+ vaga.final) >= idade) {
        vaga.peso -= (+ vaga.pesoIdade);
        perdeu += "idade, "
      }
    }

    if ((+ vaga.pesoIdioma) > 1) {
      vaga.idiomas.map(certificado => {
        let existe = false;
        candidato.idiomas.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          vaga.peso -= (+ vaga.pesoIdioma);
          perdeu += certificado.nome + ", "
        }
      });
    }

    if ((+ vaga.pesoPos) > 1) {
      vaga.posGraduacao.map(certificado => {
        let existe = false;
        candidato.posGraduacao.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          perdeu += certificado.nome + ", "
          vaga.peso -= (+ vaga.posGraduacao);
        }
      });
    }

    if ((+ vaga.pesoSuperior) > 1) {
      vaga.cursoSuperior.map(certificado => {
        let existe = false;
        candidato.cursoSuperior.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          perdeu += certificado.nome + ", "
          vaga.peso -= (+ vaga.pesoSuperior);
        }
      });
    }

    if ((+ vaga.pesoTecnico) > 1) {
      vaga.cursoTecnico.map(certificado => {
        let existe = false;
        candidato.cursoTecnico.map(certificadoC => {
          if (certificado.nome == certificadoC.nome) {
            existe = true;
          }
        });
        if (!existe) {
          perdeu += certificado.nome + ", "
          vaga.peso -= (+ vaga.pesoTecnico);
        }
      });
    }
    console.log(vaga, perdeu);

  }

}
