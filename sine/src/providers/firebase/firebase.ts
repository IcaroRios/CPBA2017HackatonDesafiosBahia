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

  cadastrarConvite(convite) {
    return this.afdb.list('/convites/').push(convite);
  }

  agendar(agendamento) {
    return this.afdb.list('/agendamentos/').push(agendamento);
  }

  cadastrarEmpresa(empresa) {
    return this.afdb.list('/empresas/').push(empresa);
  }

  getConviteEmpresa(key) {
    return this.afdb.list('/convites/', {
      query: {
        orderByChild: 'empresaKey',
        equalTo: key
      }
    });
  }

  cadastrarVaga(vaga) {
    return this.afdb.list('/vagas/').push(vaga);
  }

  getEmpresa() {
    return this.afdb.list('/empresas/');
  }

   getCandidatos() {
    return this.afdb.list('/candidatos/');
  }

  getVagasEmpresa(key) {
    return this.afdb.list('/vagas/', {
      query: {
        orderByChild: 'empresaKey',
        equalTo: key
      }
    });
  }

  getVagasCandidato() {
    return this.afdb.list('/vagas/', {
      query: {
        orderByChild: 'ocupacao'
      }
    });
  }

  cancelarAgendamento(agendamento) {
    return this.afdb.list('/agendamentos/').remove(agendamento);
  }

  loginUsuario(email) {
    return this.afdb.list('/candidatos/', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }

  loginEmpresa(email) {
    return this.afdb.list('/empresas/', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }

  getAgendamentosEmpresa(key) {
    return this.afdb.list('/agendamentos/', {
      query: {
        orderByChild: 'empresa',
        equalTo: key
      }
    });
  }

  getAgendamentosCandidato(key) {
    return this.afdb.list('/agendamentos/', {
      query: {
        orderByChild: 'usuario',
        equalTo: key
      }
    });
  }

  // buscarCandidadosVaga(vaga) {
  //   return this.afdb.list('/candidatos/', {
  //     query: {
  //       orderByChild: 'ocupacao',
  //       equalTo: vaga
  //     }
  //   });
  // }

  updateCandidato(key, candidato) {
    console.log(key);
    return this.afdb.list('/candidatos/').update(key, candidato);
  }

}
