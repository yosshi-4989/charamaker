import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharactorPage } from './charactor';

@NgModule({
  declarations: [
    CharactorPage,
  ],
  imports: [
    IonicPageModule.forChild(CharactorPage),
  ],
})
export class CharactorPageModule {}
