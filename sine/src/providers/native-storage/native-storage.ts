import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { NativeStorage } from '@ionic-native/native-storage';

/*
  Generated class for the NativeStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NativeStorageProvider {

  constructor(private nativeStorage: NativeStorage) {
    console.log('Hello NativeStorageProvider Provider');
  }

  set(chave, valor) {
    this.nativeStorage.setItem(chave, valor)
      .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
      );
  }

  get(chave) {
    this.nativeStorage.getItem(chave)
      .then(
      data => data,
      error => undefined
      );
  }

}
