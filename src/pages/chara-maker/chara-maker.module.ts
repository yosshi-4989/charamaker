import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharaMakerPage } from './chara-maker';

@NgModule({
  declarations: [
    CharaMakerPage,
  ],
  imports: [
    IonicPageModule.forChild(CharaMakerPage),
  ],
})
export class CharaMakerPageModule {}
