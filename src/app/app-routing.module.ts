import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ArticledetailsBackComponent } from './back/news/articledetails-back/articledetails-back.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';
import { ProfanityComponent } from './back/news/profanity/profanity.component';
import { UpdatearticleBackComponent } from './back/news/updatearticle-back/updatearticle-back.component';
import { BackindexComponent } from './common/back/backindex/backindex.component';
import { FrontindexComponent } from './common/front/frontindex/frontindex.component';
import { FrontmenuComponent } from './common/front/frontmenu/frontmenu.component';
import { ChatComponent } from './front/chat/chat.component';
import { ContactListComponent } from './front/chat/contact-list/contact-list.component';
import { ConversationComponent } from './front/chat/conversation/conversation.component';
import { ArticledetailsFrontComponent } from './front/news/articledetails-front/articledetails-front.component';
import { ArticlesNavComponent } from './front/news/articles-nav/articles-nav.component';
import { FollowingarticlesFrontComponent } from './front/news/followingarticles-front/followingarticles-front.component';
import { ListarticlesFrontComponent } from './front/news/listarticles-front/listarticles-front.component';

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
