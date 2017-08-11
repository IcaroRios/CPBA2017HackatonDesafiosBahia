import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCandidatoPage } from './home-candidato';

@NgModule({
  declarations: [
    HomeCandidatoPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCandidatoPage),
  ],
})
export class HomeCandidatoPageModule {}
