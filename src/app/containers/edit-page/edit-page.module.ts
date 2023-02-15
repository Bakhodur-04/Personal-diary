import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page.component';
import { RouterModule } from '@angular/router';
import { EditPageRoutingModule } from './edit-page-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';



@NgModule({
  declarations: [
    EditPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditPageRoutingModule,
    ButtonModule,
    FormsModule,
    AngularEditorModule
  ],
  exports: [
    EditPageComponent
  ]
})

export class EditPageModule { }
