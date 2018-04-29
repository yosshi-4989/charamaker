import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CharactorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'charactor/:name',
  defaultHistory: ['CharaListPage']
})
@Component({
  selector: 'page-charactor',
  templateUrl: 'charactor.html',
})
export class CharactorPage {
  charactor: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.charactor = this.navParams.get('chara');
  }

}
