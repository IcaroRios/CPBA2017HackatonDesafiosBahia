import { PerfilUsuarioPage } from './../pages/perfil-usuario/perfil-usuario';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroCandidatoPage } from '../pages/cadastro-candidato/cadastro-candidato';
import { HomeCandidatoPage } from '../pages/home-candidato/home-candidato';
import { CadastroEmpresaPage } from '../pages/cadastro-empresa/cadastro-empresa';
import { EmpresaHomePage } from './../pages/empresa-home/empresa-home';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = EmpresaHomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

