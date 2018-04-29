import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'charactor/:id',
  defaultHistory: ['CharaListPage']
})
@Component({
  selector: 'page-charactor',
  templateUrl: 'charactor.html',
})
export class CharactorPage {
  charactor: {
    'parsonalData': {
      'name': string, 
      'kana': string, 
      'age': number,
      'sex': string,
      'job': string,
      'growPlace': string,
      'memo': string
    },
    'ability': {
      'STR': number, 'DEX': number, 'INT': number, 'IDEA': number,
      'CON': number, 'APP': number, 'POW': number, 'LUCK': number,
      'SIZ': number, 'SAN': number, 'EDU': number, 'KNOW': number,
      'MAXSAN': number, 'DB': string
    },
    'status': {
      'HP': number, 'MP': number,
      'SANpoint': number
    },
    'skills': {name: string, point: number}[]
  } = {
    'parsonalData': {
      'name': null, 
      'kana': null, 
      'age': null,
      'sex': null,
      'job': null,
      'growPlace': null,
      'memo': null
    },
    'ability': {
      'STR': null, 'DEX': null, 'INT': null, 'IDEA': null,
      'CON': null, 'APP': null, 'POW': null, 'LUCK': null,
      'SIZ': null, 'SAN': null, 'EDU': null, 'KNOW': null,
      'MAXSAN': null, 'DB': null
    },
    'status': {
      'HP': null, 'MP': null,
      'SANpoint': null
    },
    'skills': []
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var i = this.navParams.get('id');
    this.charactor = JSON.parse(localStorage.getItem('charaList'))[i];
    console.log(this.charactor);
    console.log(this.charactor.parsonalData.name);
  }
}
