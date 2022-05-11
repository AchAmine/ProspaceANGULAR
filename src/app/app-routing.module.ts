import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackindexComponent } from './common/back/backindex/backindex.component';
import { FrontmenuComponent } from './common/front/frontmenu/frontmenu.component';
import { ResetComponent } from './front/user/reset/reset.component';
import { SigninPageComponent } from './front/user/signin-page/signin-page.component';
import { SignupPageComponent } from './front/user/signup-page/signup-page.component';
import { AuthGuardGuard } from './service/auth-guard.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  },
  {path:'login', component: SigninPageComponent},
  {path:'signup', component: SignupPageComponent},
  {path:'reset/:token', component: ResetComponent},
  {
    path: 'home', 
    component: FrontmenuComponent,canActivate:[AuthGuardGuard],
    children: [{
    path: '', loadChildren:() => import('./front/front/front.module').then(m=> m.FrontModule)
  }]
},
{
  path: 'dashboard', 
  component: BackindexComponent,canActivate:[AuthGuardGuard],
  children: [{
  path: '', loadChildren:() => import('./back/back/back.module').then(m=> m.BackModule)
}]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
