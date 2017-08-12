import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { OneSignal } from '@ionic-native/onesignal';

/*
  Generated class for the PushService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PushService {

  private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Basic ZDMzODdkZGUtNDRjMi00ODk5LThkNjQtNzA4MDRjNTFlZjQz' });

  constructor(
    public http: Http,
    private os: OneSignal
  ) {
    console.log('Hello PushService Provider');
  }

  public getId(): Promise<any> {
    return this.os.getIds().then(res => res.userId);
  }

  addTag(tag: string) {
    this.os.sendTag("permissao", tag);
  }

  removeTag(tag: string) {
    this.os.deleteTag("permissao");
  }

  pushUmaPessoa(mensagem, pessoa) {
    this.http.post('https://onesignal.com/api/v1/notifications', JSON.stringify({
      "app_id": "3798198d-14e6-48c8-8f76-8106bc5c1856",
      "headings": { "en": "Bahia Empregos" },
      "data": { "foo": "bar" },
      "include_player_ids": [pessoa.Push],
      "contents": { "en": mensagem },
      "android_group": 'bahiaEmpregos',
      "android_group_message": { "en": "Você tem $[notif_count] novas notificações" },
    }), { headers: this.headers }).toPromise().then(res => res);
  }

  pushGrupo(mensagem, grupo) {
    this.http.post('https://onesignal.com/api/v1/notifications', JSON.stringify({
      "app_id": "3798198d-14e6-48c8-8f76-8106bc5c1856",
      "headings": { "en": "Bahia Empregos" },
      "data": { "foo": "bar" },
      "included_segments": [grupo],
      "contents": { "en": mensagem },
      "android_group": 'bahiaEmpregos',
      "android_group_message": { "en": "Você tem $[notif_count] novas notificações" },
    }), { headers: this.headers }).toPromise().then(res => res);
  }



}
