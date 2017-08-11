import { PerfilUsuarioPage } from './../pages/perfil-usuario/perfil-usuario';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
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


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = EmpresaVagasPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

