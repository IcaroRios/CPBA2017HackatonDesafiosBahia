import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosUsuarioPage } from './dados-usuario';

@NgModule({
  declarations: [
    DadosUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosUsuarioPage),
  ],
})
export class DadosUsuarioPageModule {}
