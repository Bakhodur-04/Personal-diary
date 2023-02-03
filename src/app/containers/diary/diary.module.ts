import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary.component';
import { EntryModule } from '../entry/entry.module';



@NgModule({
  declarations: [
    DiaryComponent
  ],
  imports: [
    CommonModule,
    EntryModule
  ],
  exports: [
    DiaryComponent
  ]  
})

export class DiaryModule { }
