import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SkillPoint, Skill } from '../../interfaces/chara-model';
import { SkillList } from '../../interfaces/chara-const';

@IonicPage()
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {
  skillPoint: SkillPoint = {
    'jobSkillPoint': null,
    'freeSkillPoint': null
  };
  usableSkillPoint: SkillPoint = {
    'jobSkillPoint': null,
    'freeSkillPoint': null
  };
  skills: Skill[] = SkillList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    // 能力値依存の初期値をセット
    if (localStorage.getItem('ability')) {
      var ability = JSON.parse(localStorage.getItem('ability'));
      this.skills[7].default = 2 * ability.DEX;
      this.skills[48].default = Math.min(5 * ability.EDU, 99);
    }
    if (localStorage.getItem('skillPoint')) {
      this.skillPoint = JSON.parse(localStorage.getItem('skillPoint'));
      this.usableSkillPoint = JSON.parse(localStorage.getItem('skillPoint'));
    }
    if (localStorage.getItem('skills')) {
      var skills = JSON.parse(localStorage.getItem('skills'));
      this.skills.forEach(function(skill){
        if (this[skill.name]) {
          var s = this[skill.name];
          delete this[skill.name];
          skill.jobPoint = s[1];
          skill.freePoint = s[2];
          skill.point = s[3];
        }
      }, skills);
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
    return "職業技能：" + this.usableSkillPoint.jobSkillPoint + "   自由技能：" + this.usableSkillPoint.freeSkillPoint;
  }
  calcMaxPoint(initPoint: number) {
    return 99 - 1*initPoint;
  } 
  range(start, end) {
    if (typeof end == "undefined") {
      end = start;
      start = 0;
    }
    return Array.from(Array(end+1).keys()).slice(start);
  }
  maxPoint(skill: {'name': string, 'default': number, 'jobPoint': number, 'freePoint': number, 'point': number, 'addFlag': boolean}, currentPoint: string, anotherPoint: string) {
    this.calcUsablePoint()
    return Math.max(0, Math.min(99 - 1*skill.default - 1*skill[anotherPoint], 1*this.usableSkillPoint[currentPoint.replace(/Point/g, 'SkillPoint')]+1*skill[currentPoint]));
  }
}
