import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chara-maker',
  templateUrl: 'chara-maker.html',
})
export class CharaMakerPage {
  abilities: Array<{name: string, point: number}> = [
    {name: 'STR', point: null},
    {name: 'DEX', point: null},
    {name: 'INT', point: null},
    {name: 'CON', point: null},
    {name: 'APP', point: null},
    {name: 'POW', point: null},
    {name: 'SIZ', point: null},
    {name: '', point: null},
    {name: 'EDU', point: null}
  ];
  ability: {
    'STR': number, 'DEX': number, 'INT': number, 'IDEA': number,
    'CON': number, 'APP': number, 'POW': number, 'LUCK': number,
    'SIZ': number, 'SAN': number, 'EDU': number, 'KNOW': number,
    'MAXSAN': number, 'DB': string
  } = {
    'STR': null, 'DEX': null, 'INT': null, 'IDEA': null,
    'CON': null, 'APP': null, 'POW': null, 'LUCK': null,
    'SIZ': null, 'SAN': null, 'EDU': null, 'KNOW': null,
    'MAXSAN': null, 'DB': ''
  };
  status: {
    'HP': number, 'MP': number,
    'SANpoint': number
  } = {
    'HP': null, 'MP': null,
    'SANpoint': null
  };
  damage_bonus: Array<string> = ['-1d6', '-1d4', '0', '+1d4', '+1d6', '+2d6'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submitAbility() {
    this._generate_ability_and_status();
    localStorage.setItem('ability', JSON.stringify(this.abilities));
    localStorage.setItem('status', JSON.stringify(this.status));
  }
  ionViewWillEnter() {
    if (localStorage.getItem('ability')) {
      this.abilities = JSON.parse(localStorage.getItem('ability'));
    }
    if (localStorage.getItem('status')) {
      this.status = JSON.parse(localStorage.getItem('status'));
    }
  }

  _calc_db(point: number) {
    if (point <= 12) {
      return this.damage_bonus[0];
    } else if(point <= 16) {
      return this.damage_bonus[1];
    } else if(point <= 24) {
      return this.damage_bonus[2];
    } else if(point <= 32) {
      return this.damage_bonus[3];
    } else if(point <= 40) {
      return this.damage_bonus[4];
    } else {
      return this.damage_bonus[5];
    }
  }
  _generate_ability_and_status() {
    this.ability['STR'] = 1*this.abilities[0].point;
    this.ability['DEX'] = 1*this.abilities[1].point;
    this.ability['INT'] = 1*this.abilities[2].point;
    this.ability['CON'] = 1*this.abilities[3].point;
    this.ability['APP'] = 1*this.abilities[4].point;
    this.ability['POW'] = 1*this.abilities[5].point;
    this.ability['SIZ'] = 1*this.abilities[6].point;
    this.ability['SAN'] = 5 * this.ability['POW'];
    this.ability['EDU'] = 1*this.abilities[8].point;
    this.ability['IDEA'] = 5 * this.ability['INT'];
    this.ability['LUCK'] = 5 * this.ability['POW'];
    this.ability['KNOW'] = 5 * this.ability['EDU'];
    this.ability['MAXSAN'] = 99;
    var bonus_sum = 1*this.ability['STR'] + 1*this.ability['SIZ'];
    this.ability['DB'] = this._calc_db(bonus_sum);

    this.status['HP'] = Math.ceil((1*this.ability['CON'] + 1*this.ability['SIZ']) / 2);
    this.status['MP'] = this.ability['POW'];
    this.status['SAMpoint'] = this.ability['SAN'];
  }
}
