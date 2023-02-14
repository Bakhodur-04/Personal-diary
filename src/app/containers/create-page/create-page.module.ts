import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePageComponent } from './create-page.component';
import { RouterModule } from '@angular/router';
import { CreatePageRoutingModule } from './create-page-routing.module';
import { EntryModule } from '../entry/entry.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CreatePageRoutingModule,
    EntryModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  exports: [
    CreatePageComponent
  ]
})

export class CreatePageModule { }
