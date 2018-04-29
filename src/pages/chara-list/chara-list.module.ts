import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharaListPage } from './chara-list';

@NgModule({
  declarations: [
    CharaListPage,
  ],
  imports: [
    IonicPageModule.forChild(CharaListPage),
  ],
})
export class CharaListPageModule {}
