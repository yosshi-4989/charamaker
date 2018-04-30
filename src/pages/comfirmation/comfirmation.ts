import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-comfirmation',
  templateUrl: 'comfirmation.html',
})
export class ComfirmationPage {
  parsonalData: {
    'name': string, 
    'kana': string, 
    'age': number,
    'sex': string,
    'job': string,
    'growPlace': string,
    'memo': string
  } = {
    'name': null, 
    'kana': null, 
    'age': null,
    'sex': null,
    'job': null,
    'growPlace': null,
    'memo': null
  };
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
  skills: {name: string, point: number}[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public myApp: MyApp) {
  }

  ionViewWillEnter() {
    if (localStorage.getItem('ability')) {
      this.ability = JSON.parse(localStorage.getItem('ability'));
    }
    if (localStorage.getItem('parsonalData')) {
      this.parsonalData = JSON.parse(localStorage.getItem('parsonalData'));
    }
    if (localStorage.getItem('status')) {
      this.status = JSON.parse(localStorage.getItem('status'));
    }
    if (localStorage.getItem('skills')) {
      var skills = JSON.parse(localStorage.getItem('skills'));
      for (var name in skills) {
        this.skills.push({'name': name, 'point': skills[name][3]});
      }
    }
  }
  submitConfirmation() {
    var chara = {
      'parsonalData': this.parsonalData,
      'ability': this.ability,
      'status': this.status,
      'skills': this.skills
    };
    var charaList = [];
    //if (localStorage.getItem('charaList')) {
    //  charaList = JSON.parse(localStorage.getItem('charaList'));
    //}
    
    charaList.push(chara);
    localStorage.setItem('charaList', JSON.stringify(charaList));

    localStorage.removeItem('abilities');
    localStorage.removeItem('ability');
    localStorage.removeItem('status');
    localStorage.removeItem('skillPoint');
    localStorage.removeItem('skills');
    localStorage.removeItem('parsonalData');

    this.myApp.openPage(this.myApp.pages[0]);
  }
  getName() {
    if (this.parsonalData.kana) {
      return this.parsonalData.name + "(" + this.parsonalData.kana + ')';
    } else {
      return this.parsonalData.name;
    }
  }
}
