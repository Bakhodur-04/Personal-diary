import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component';
import { RouterModule } from '@angular/router';
import { EditPageRoutingModule } from './edit-page-routing.module';
import { EntryModule } from '../entry/entry.module';
import { ButtonModule } from 'src/app/components/button/button.module';



@NgModule({
  declarations: [
    EditPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditPageRoutingModule,
    EntryModule,
    ButtonModule
  ],
  exports: [
    EditPageComponent
  ]
})

export class EditPageModule { }
