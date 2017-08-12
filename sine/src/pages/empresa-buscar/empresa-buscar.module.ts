import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresaBuscarPage } from './empresa-buscar';

@NgModule({
  declarations: [
    EmpresaBuscarPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpresaBuscarPage),
  ],
})
export class EmpresaBuscarPageModule {}
