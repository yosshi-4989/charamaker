import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {
  skillPoint: {'jobSkillPoint': number, 'freeSkillPoint': number} = {
    'jobSkillPoint': null,
    'freeSkillPoint': null
  };
  usableSkillPoint: {'jobSkillPoint': number, 'freeSkillPoint': number} = {
    'jobSkillPoint': null,
    'freeSkillPoint': null
  };
  skills: {'name': string, 'default': number, 'jobPoint': number, 'freePoint': number, 'point': number, 'addFlag': boolean}[] = [
    {'name': '居合い', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '言いくるめ', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '医学', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '運転(自動車)', 'default': 20, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '運転', 'default': 20, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': true},
    {'name': '応急手当', 'default': 30, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': 'オカルト', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '回避', 'default': 0, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '化学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '鍵開け', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '隠す', 'default': 15, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '隠れる', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '機械修理', 'default': 20, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '聞き耳', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '芸術', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': true},
    {'name': '経理', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '考古学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': 'コンピュータ', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '忍び歩き', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '写真術', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '重機械操作', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '乗馬', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '信用', 'default': 15, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '心理学', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},

    {'name': '人類学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '水泳', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '製作', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': true},
    {'name': '精神分析', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '生物学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '説得', 'default': 15, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '操縦', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': true},
    {'name': '地質学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '跳躍', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '追跡', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '電気修理', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '電子工学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '天文学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '投擲', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '登攀', 'default': 40, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '図書館', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': 'ナビゲート', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '値切り', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '博物学', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '物理学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '武道', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': true},
    {'name': '変装', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '法律', 'default': 5, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},

    {'name': 'ほかの言語', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': true},
    {'name': '母国語', 'default': 0, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '目星', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '薬学', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '歴史', 'default': 20, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '', 'default': 1, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': true},

    {'name': '拳銃', 'default': 20, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': 'サブマシンガン', 'default': 15, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': 'ショットガン', 'default': 30, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': 'マシンガン', 'default': 15, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': 'ライフル', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},

    {'name': 'キック', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '組みつき', 'default': 25, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': 'こぶし', 'default': 50, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
    {'name': '頭突き', 'default': 10, 'jobPoint': null, 'freePoint': null, 'point': null, 'addFlag': false},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    if (localStorage.getItem('abilities')) {
      this.skillPoint = JSON.parse(localStorage.getItem('skillPoint'));
      this.usableSkillPoint = JSON.parse(localStorage.getItem('skillPoint'));
    }
    if (localStorage.getItem('skills')) {
      var skills = JSON.parse(localStorage.getItem('skills'));
      console.log(skills)
      this.skills.forEach(function(skill){
        if (this[skill.name]) {
          var s = this[skill.name];
          delete this[skill.name];
          skill.jobPoint = s[1];
          skill.freePoint = s[2];
          skill.point = s[3];
        }
      }, skills);
      console.log(skills)
      // TODO 技能名を変更できる技能をskillsに登録する処理を追加
    }
  }
  submitSkill() {
    if (this.usableSkillPoint.jobSkillPoint > 0 || this.usableSkillPoint.freeSkillPoint > 0) {
      // TODO 確認ダイアログを表示する処理を作成
      alert("ポイントが残っています")
      return;
    }
    var skills = {};
    this.skills.forEach(function(skill){
      if (skill.jobPoint > 0 || skill.freePoint > 0) {
        this[skill.name] = [skill.default, skill.jobPoint, skill.freePoint, skill.point];
      }
    }, skills);
    localStorage.setItem('skills', JSON.stringify(skills));
    this.navCtrl.push('ParsonalPage');
  }
  sumSkillPoint(skill: {'name': string, 'default': number, 'jobPoint': number, 'freePoint': number, 'point': number, 'addFlag': boolean}) {
    var point = 1*skill.default;
    if (skill.jobPoint) {
      point += Math.max(1*skill.jobPoint, 0);
    }
    if (skill.freePoint) {
      point += Math.max(1*skill.freePoint, 0);
    }
    skill.point = Math.min(point, 99);
    return Math.min(point, 99);
  }
  calcUsablePoint() {
    var sumPoint = [0, 0];
    this.skills.forEach(function(skill) {
      if (skill.jobPoint) {
        this[0] += Math.max(1*skill.jobPoint, 0);
      }
      if (skill.freePoint) {
        this[1] += Math.max(1*skill.freePoint, 0);
      }
    },sumPoint);
    var jobP = this.skillPoint.jobSkillPoint - sumPoint[0];
    var freeP = this.skillPoint.freeSkillPoint - sumPoint[1];
    this.usableSkillPoint.jobSkillPoint = jobP;
    this.usableSkillPoint.freeSkillPoint = freeP;
    return "職業技能：" + jobP + "   自由技能：" + freeP;
  }
  calcMaxPoint(initPoint: number) {
    return 99 - 1*initPoint;
  } 
}
