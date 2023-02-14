import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './containers/diary/diary.component';
import { CreatePageComponent } from './containers/create-page/create-page.component';
import { LoginComponent } from './containers/login/login.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { RegisterComponent } from './containers/register/register.component';
import { EditPageComponent } from './containers/edit-page/edit-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'diary',
    loadChildren: () => import('./containers/diary/diary.module').then(mod => mod.DiaryModule),
    // component: DiaryComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreatePageComponent
  },
  {
    path: 'edit/:id',
    component: EditPageComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
