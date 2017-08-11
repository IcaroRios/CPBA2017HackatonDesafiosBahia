import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresaAgendamentoPage } from './empresa-agendamento';

@NgModule({
  declarations: [
    EmpresaAgendamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpresaAgendamentoPage),
  ],
})
export class EmpresaAgendamentoPageModule {}
