import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';



@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntryComponent
  ]
})

export class EntryModule { }
