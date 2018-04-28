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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submitAbility() {
    sessionStorage.setItem('ability', JSON.stringify(this.abilities))
  }
  ionViewWillEnter() {
    this.abilities = JSON.parse(sessionStorage.getItem('ability'))
  }

}
