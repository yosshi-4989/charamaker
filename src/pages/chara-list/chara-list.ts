import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharaData } from '../../interfaces/chara-model';

@IonicPage()
@Component({
  selector: 'page-chara-list',
  templateUrl: 'chara-list.html',
})
export class CharaListPage {
  charaList: Array<CharaData> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    if (localStorage.getItem('charaList')) {
      this.charaList = JSON.parse(localStorage.getItem('charaList'));
    }
  }
}
