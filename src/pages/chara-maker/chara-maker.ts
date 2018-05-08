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
    // TODO 入力バリデーションを作る
    this._generate_ability_and_status();
    localStorage.setItem('abilities', JSON.stringify(this.abilities));
    localStorage.setItem('ability', JSON.stringify(this.ability));
    localStorage.setItem('status', JSON.stringify(this.status));

    var skillPoint = {
      'jobSkillPoint': 20*this.ability['EDU'],
      'freeSkillPoint': 10*this.ability['INT']
    }
    localStorage.setItem('skillPoint', JSON.stringify(skillPoint));

    this.navCtrl.push('SkillPage');
  }
  ionViewWillEnter() {
    if (localStorage.getItem('abilities')) {
      this.abilities = JSON.parse(localStorage.getItem('abilities'));
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
    this.abilities.forEach(function( value ) {
      if (value.name != '') {
        this.ability[value.name] = 1*value.point;
      }
    }, this);
    this.ability['SAN'] = 5 * this.ability['POW'];
    this.ability['IDEA'] = 5 * this.ability['INT'];
    this.ability['LUCK'] = 5 * this.ability['POW'];
    this.ability['KNOW'] = Math.min(5 * this.ability['EDU'], 99);
    this.ability['MAXSAN'] = 99;
    var bonus_sum = 1*this.ability['STR'] + 1*this.ability['SIZ'];
    this.ability['DB'] = this._calc_db(bonus_sum);

    this.status['HP'] = Math.ceil((1*this.ability['CON'] + 1*this.ability['SIZ']) / 2);
    this.status['MP'] = this.ability['POW'];
    this.status['SANpoint'] = this.ability['SAN'];
  }

  isValid() {
    var bool = true;
    for (var abi of this.abilities) {
      if (abi.name == '') {
        continue;
      }

      if (!abi.point || abi.point <= 0) {
        bool = false;
        break;
      }
    }
    return bool;
  }

  diceRoll() {
    for (var abi of this.abilities) {
      if (abi.name == "EDU") {
        abi.point = this.getRandom(1,6) + this.getRandom(1,6) + this.getRandom(1,6) + 3;
      } else if (abi.name == "SIZ" || abi.name == "INT") {
        abi.point = this.getRandom(1,6) + this.getRandom(1,6) + 6;
      } else if (abi.name != "") {
        abi.point = this.getRandom(1,6) + this.getRandom(1,6) + this.getRandom(1,6);
      }
    }
  }
  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  range(n) {
    return Array.from(Array(n).keys()).slice(1)
  }
}
