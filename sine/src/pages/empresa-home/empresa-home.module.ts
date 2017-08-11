import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresaHomePage } from './empresa-home';

@NgModule({
  declarations: [
    EmpresaHomePage,
  ],
  imports: [
    IonicPageModule.forChild(EmpresaHomePage),
  ],
})
export class EmpresaHomePageModule {}
