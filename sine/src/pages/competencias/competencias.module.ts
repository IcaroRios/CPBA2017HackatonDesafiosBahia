import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetenciasPage } from './competencias';

@NgModule({
  declarations: [
    CompetenciasPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetenciasPage),
  ],
})
export class CompetenciasPageModule {}
