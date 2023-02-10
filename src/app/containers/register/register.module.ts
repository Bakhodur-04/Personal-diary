import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    RegisterComponent
  ]
})

export class RegisterModule { }
