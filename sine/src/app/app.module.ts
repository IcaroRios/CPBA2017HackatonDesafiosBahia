

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { CadastroCandidatoPage } from '../pages/cadastro-candidato/cadastro-candidato';
import { CripSenhaProvider } from '../providers/crip-senha/crip-senha';
import { CadastroEmpresaPage } from '../pages/cadastro-empresa/cadastro-empresa';
import { HomeCandidatoPage } from '../pages/home-candidato/home-candidato';
import { PerfilUsuarioPage } from './../pages/perfil-usuario/perfil-usuario';
import { EmpresaHomePage } from './../pages/empresa-home/empresa-home';
import { DadosUsuarioPage } from './../pages/dados-usuario/dados-usuario';
import { LoginPage } from './../pages/login/login';
import { EmpresaVagasPage } from './../pages/empresa-vagas/empresa-vagas';
import { NativeStorageProvider } from '../providers/native-storage/native-storage';
import { EmpresaAgendamentoPage } from './../pages/empresa-agendamento/empresa-agendamento';
import { EmpresaPedidosPage } from './../pages/empresa-pedidos/empresa-pedidos';
import { CertificacoesPage } from './../pages/certificacoes/certificacoes';
import { CompetenciasPage } from './../pages/competencias/competencias';


const firebaseConfig = {
  apiKey: "AIzaSyAZCyzyHuF_rEkoh3r_fRueZcTPwcc6nuw",
  authDomain: "side-d22aa.firebaseapp.com",
  databaseURL: "https://side-d22aa.firebaseio.com",
  projectId: "side-d22aa",
  storageBucket: "side-d22aa.appspot.com",
  messagingSenderId: "729273512980"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroCandidatoPage,
    CadastroEmpresaPage,
    HomeCandidatoPage,
    PerfilUsuarioPage,
    LoginPage,
    EmpresaHomePage,
    DadosUsuarioPage,
    EmpresaVagasPage,
    EmpresaAgendamentoPage,
    EmpresaPedidosPage,
    CompetenciasPage,
    CertificacoesPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroCandidatoPage,
    CadastroEmpresaPage,
    HomeCandidatoPage,
    PerfilUsuarioPage,
    LoginPage,
    EmpresaHomePage,
    DadosUsuarioPage,
    EmpresaVagasPage,
    EmpresaAgendamentoPage,
    EmpresaPedidosPage,
    CompetenciasPage,
    CertificacoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider,
    CripSenhaProvider,
    NativeStorageProvider
  ]
})
export class AppModule { }
