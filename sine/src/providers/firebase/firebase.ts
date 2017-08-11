import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afdb: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  //   getVagas() {
  //   return this.afdb.list('/vagas/');
  // }

  // getEqualsOS(valor: string) {
  //    return this.afdb.list('/vagas/', {
  //     query: {
  //       orderByChild: 'status',
  //       equalTo: valor
  //     }
  //   });
  // }

  // checkIn(key, valor){
  //   return this.afdb.list('/vagas/').update(key, { valor: valor })
  // }

  cadastrarCandidato(candidato) {
    return this.afdb.list('/candidatos/').push(candidato);
  }
  cadastrarEmpresa(empresa){
    return this.afdb.list('/empresas/').push(empresa);
  }

  loginUsuario(email){
    return this.afdb.list('/candidatos/', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }

  loginEmpresa(email){
    return this.afdb.list('/empresas/', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }

}
