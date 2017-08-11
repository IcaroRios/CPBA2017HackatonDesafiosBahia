import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the NativeStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NativeStorageProvider {

  constructor(private nativeStorage: Storage) {
    console.log('Hello NativeStorageProvider Provider');
  }

  set(chave, valor): Promise<any> {
    return this.nativeStorage.set(chave, valor)
      .then(
      () => true,
      error => console.error('Error storing item', error)
      );
  }

  get(chave): Promise<any> {
    return this.nativeStorage.get(chave)
      .then(
      data => data,
      error => undefined
      );
  }

}
