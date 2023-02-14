import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import localeRuExtra from '@angular/common/locales/extra/ru';
registerLocaleData(localeRu, 'ru-RU', localeRuExtra);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryModule } from './containers/diary/diary.module';
import { TopBarModule } from './containers/top-bar/top-bar.module';
import { CreatePageModule } from './containers/create-page/create-page.module';
import { environment } from 'src/environments/environment';
import { LoginModule } from './containers/login/login.module';
import { FormsModule } from '@angular/forms';
import { RegisterModule } from './containers/register/register.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'
import { EditPageModule } from './containers/edit-page/edit-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiaryModule,
    TopBarModule,
    CreatePageModule,
    EditPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    LoginModule,
    FormsModule,
    RegisterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
