import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { CadastroCandidatoPage } from '../pages/cadastro-candidato/cadastro-candidato';

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
    CadastroCandidatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroCandidatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider
  ]
})
export class AppModule { }
