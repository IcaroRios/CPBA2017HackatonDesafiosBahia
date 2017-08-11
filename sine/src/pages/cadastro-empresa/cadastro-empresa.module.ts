import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEmpresaPage } from './cadastro-empresa';

@NgModule({
  declarations: [
    CadastroEmpresaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEmpresaPage),
  ],
})
export class CadastroEmpresaPageModule {}
