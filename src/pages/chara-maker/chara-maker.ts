import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chara-maker',
  templateUrl: 'chara-maker.html',
})
export class CharaMakerPage {
  avilities: Array<{name: string, point: number}> = [
    {name: 'STR', point: null},
    {name: 'DEX', point: null},
    {name: 'INT', point: null},
    {name: 'CON', point: null},
    {name: 'APP', point: null},
    {name: 'POW', point: null},
    {name: 'SIZ', point: null},
    {name: 'SAN', point: null},
    {name: 'EDU', point: null}
  //  {name: 'IDEA', point: null},
  //  {name: 'LUCK', point: null},
  //  {name: 'KNOW', point: null},
  //  {name: 'DB', point: null},
  //  {name: 'MAXSAN', point: null},
  ];

  points: Array<number> = Array.from(Array(25), (k, v) => v+1);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharaMakerPage');
  }

}
