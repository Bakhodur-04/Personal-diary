import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary.component';
import { EntryModule } from '../entry/entry.module';
import { RouterModule } from '@angular/router';
import { DiaryRoutingModule } from './diary-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';



@NgModule({
  declarations: [
    DiaryComponent
  ],
  imports: [
    CommonModule,
    EntryModule,
    RouterModule,
    DiaryRoutingModule,
    ButtonModule
  ],
  exports: [
    DiaryComponent
  ]  
})

export class DiaryModule { }
