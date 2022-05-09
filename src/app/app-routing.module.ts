import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackindexComponent } from './common/back/backindex/backindex.component';
import { FrontmenuComponent } from './common/front/frontmenu/frontmenu.component';

const routes: Routes = [
  {
    path: 'home', 
    component: FrontmenuComponent,
    children: [{
    path: '', loadChildren:() => import('./front/front/front.module').then(m=> m.FrontModule)
  }]
},
{
  path: 'dashboard', 
  component: BackindexComponent,
  children: [{
  path: '', loadChildren:() => import('./back/back/back.module').then(m=> m.BackModule)
}]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
