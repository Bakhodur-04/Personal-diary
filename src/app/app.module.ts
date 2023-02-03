import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryModule } from './containers/diary/diary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiaryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
