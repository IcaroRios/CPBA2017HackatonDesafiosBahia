import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CertificacoesPage } from './certificacoes';

@NgModule({
  declarations: [
    CertificacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(CertificacoesPage),
  ],
})
export class CertificacoesPageModule {}
