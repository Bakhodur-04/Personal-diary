import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './diary.component';
import { EditPageComponent } from '../edit-page/edit-page.component';


export const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: '',
        component: DiaryComponent,
        pathMatch: 'full'
      }
    ]
  },
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

export class DiaryRoutingModule { }
