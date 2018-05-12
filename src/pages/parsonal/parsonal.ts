import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParsonalData } from '../../interfaces/chara-model';

@IonicPage()
@Component({
  selector: 'page-parsonal',
  templateUrl: 'parsonal.html',
})
export class ParsonalPage {
  parsonalData: ParsonalData = {
    'name': null, 
    'kana': null, 
    'age': null,
    'sex': null,
    'job': null,
    'growPlace': null,
    'memo': null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    if (localStorage.getItem('parsonalData')) {
      this.parsonalData = JSON.parse(localStorage.getItem('parsonalData'));
    }
  }

  submitParsonal() {
    localStorage.setItem('parsonalData', JSON.stringify(this.parsonalData));
    this.navCtrl.push('ComfirmationPage');
  }
}
