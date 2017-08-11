import { PerfilUsuarioPage } from './../pages/perfil-usuario/perfil-usuario';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroCandidatoPage } from '../pages/cadastro-candidato/cadastro-candidato';
import { HomeCandidatoPage } from '../pages/home-candidato/home-candidato';
import { CadastroEmpresaPage } from '../pages/cadastro-empresa/cadastro-empresa';
import { EmpresaHomePage } from './../pages/empresa-home/empresa-home';
import { EmpresaVagasPage } from './../pages/empresa-vagas/empresa-vagas';
import { LoginPage } from './../pages/login/login';
import { DadosUsuarioPage } from './../pages/dados-usuario/dados-usuario';
import { EmpresaAgendamentoPage } from './../pages/empresa-agendamento/empresa-agendamento';
import { EmpresaPedidosPage } from './../pages/empresa-pedidos/empresa-pedidos';
<<<<<<< HEAD
import { NativeStorageProvider } from './../providers/native-storage/native-storage';
=======
import { CompetenciasPage } from './../pages/competencias/competencias';
import { CertificacoesPage } from './../pages/certificacoes/certificacoes';
>>>>>>> 9f92d3dcb46b15269afa94464be5a6a0dedc7217

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private nativeStorage: NativeStorageProvider
  ) {
    this.nativeStorage.get("user").then(response => {
      if (response) {
        this.nav.setRoot(EmpresaHomePage);
      } else {
        this.nav.setRoot(LoginPage);
      }
    }).catch(()=>this.nav.setRoot(LoginPage));
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });
  }
}

