import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'edit',
    component: EntryComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class EntryRoutingModule { }
