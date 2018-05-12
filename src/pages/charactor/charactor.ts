import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { CharaData } from '../../interfaces/chara-model';

@IonicPage({
  segment: 'charactor/:id',
  defaultHistory: ['CharaListPage']
})
@Component({
  selector: 'page-charactor',
  templateUrl: 'charactor.html',
})
export class CharactorPage {
  charaIndex: number;
  charactor: CharaData  = {
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
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public myApp: MyApp
  ) {}

  ionViewDidLoad() {
    this.charaIndex = this.navParams.get('id');
    this.charactor = JSON.parse(localStorage.getItem('charaList'))[this.charaIndex];
  }
  crud() {
    let action = this.actionSheetCtrl.create({
      title: 'キャラクター変更',
      buttons:[
        {
          text: '削除',
          role: 'destructive',
          handler: () => {
            var charactor = JSON.parse(localStorage.getItem('charaList'));
            charactor.splice(this.charaIndex, 1);
            localStorage.setItem('charaList', charactor);
            this.myApp.openPage(this.myApp.pages[0]);
          }
        },{
          text: '変更',
          handler: () => {
            alert('未実装也')
            console.log('Destory');
          }
        },{
          text: '閉じる',
          role: 'cancel',
          handler: () => {
            console.log('Destory');
          }
        }
      ]
    });
    action.present();

  }
}
