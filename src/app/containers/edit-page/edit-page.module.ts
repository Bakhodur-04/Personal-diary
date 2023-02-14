import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component';
import { RouterModule } from '@angular/router';
import { EditPageRoutingModule } from './edit-page-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditPageRoutingModule,
    ButtonModule,
    FormsModule
  ],
  exports: [
    EditPageComponent
  ]
})

export class EditPageModule { }
