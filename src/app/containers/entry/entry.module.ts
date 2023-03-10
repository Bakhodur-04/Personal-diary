import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/components/button/button.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
  exports: [
    EntryComponent
  ]
})

export class EntryModule { }
