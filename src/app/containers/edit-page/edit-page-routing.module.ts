import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './edit-page.component';

const routes: Routes = [
  {
    path: 'edit',
    component: EditPageComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class EditPageRoutingModule { }
