import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresaPedidosPage } from './empresa-pedidos';

@NgModule({
  declarations: [
    EmpresaPedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpresaPedidosPage),
  ],
})
export class EmpresaPedidosPageModule {}
