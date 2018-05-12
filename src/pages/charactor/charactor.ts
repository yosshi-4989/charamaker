import { Component } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard';
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
    public myApp: MyApp,
    private clipboard: Clipboard
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
          }
        },{
          text: 'コピー',
          handler: () => {
            this.clipboard.copy(this._generate_copy_text())
          }
        },{
          text: '閉じる',
          role: 'cancel',
        }
      ]
    });
    action.present();

  }

  private _generate_copy_text(){
    let pData = this.charactor.parsonalData
    let abi = this.charactor.ability
    let sta = this.charactor.status
    let skl = this.charactor.skills

    let parsonal = "#{pData.name}(#{pData.kana})¥n";
    parsonal += "年齢: #{pData.age}¥n性別: #{pData.sex}¥n";
    parsonal += "職業: #{pData.job}¥n出身地: #{pData.growPlace}¥n";
    parsonal += "その他: #{pData.memo}¥n";

    let ability = "STR: #{abi.STR}  DEX: #{abi.DEX}  INT: #{abi.INT}  アイデア: #{abi.IDEA}¥n"
    ability += "CON: #{abi.CON}  APP: #{abi.APP}  POW: #{abi.POW}  幸運: #{abi.LUCK}¥n"
    ability += "SIZ: #{abi.SIZ}  SAN: #{abi.SAN}  EDU: #{abi.EDU}  知識: #{abi.KNOW}¥n"
    ability += "最大正気度ポイント: #{abi.MAXSAN}  ダメージボーナス: #{abi.DB}¥n"
    ability += "¥nHP: #{sta.HP}  MP: #{sta.MP}  現在正気度ポイント: #{sta.SANpoint}¥n"

    let skills = "";
    for (let skill of skl) {
      skills += "#{skill.name}: #{skill.point}¥n"
    }

    return parsonal + ability + skills;
  }
}
