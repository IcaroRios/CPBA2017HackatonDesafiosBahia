import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCandidatoPage } from './cadastro-candidato';

@NgModule({
  declarations: [
    CadastroCandidatoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCandidatoPage),
  ],
})
export class CadastroCandidatoPageModule {}
