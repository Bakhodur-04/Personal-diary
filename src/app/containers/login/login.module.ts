import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule { }
