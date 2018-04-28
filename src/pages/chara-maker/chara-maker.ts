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
  addAbilities: Array<{name: string, point: number}> =[
    {name: 'SAN', point: null},
    {name: 'IDEA', point: null},
    {name: 'LUCK', point: null},
    {name: 'KNOW', point: null},
    {name: 'MAXSAN', point: null},
    {name: 'DB', point: null}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submitAbility() {
    this.addAbilities['SAN'] = this.abilities['POW'];
    this.addAbilities['IDEA'] = 5 * this.abilities['INT'];
    this.addAbilities['LUCK'] = 5 * this.abilities['POW'];
    this.addAbilities['KNOW'] = 5 * this.abilities['EDU'];
    localStorage.setItem('ability', JSON.stringify(this.abilities))
  }
  ionViewWillEnter() {
    if (localStorage.getItem('ability')) {
      this.abilities = JSON.parse(localStorage.getItem('ability'))
    }
  }

}
