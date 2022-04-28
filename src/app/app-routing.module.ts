import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ArticledetailsBackComponent } from './back/news/articledetails-back/articledetails-back.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';
import { ProfanityComponent } from './back/news/profanity/profanity.component';
import { UpdatearticleBackComponent } from './back/news/updatearticle-back/updatearticle-back.component';
import { FrontindexComponent } from './common/front/frontindex/frontindex.component';
import { ArticledetailsFrontComponent } from './front/news/articledetails-front/articledetails-front.component';
import { ArticlesNavComponent } from './front/news/articles-nav/articles-nav.component';
import { FollowingarticlesFrontComponent } from './front/news/followingarticles-front/followingarticles-front.component';
import { ListarticlesFrontComponent } from './front/news/listarticles-front/listarticles-front.component';

const routes: Routes = [
  {path:'home', component: FrontindexComponent},
  {path: 'editarticle/:id', component: UpdatearticleBackComponent},
  {path: 'listarticles', component: ListarticlesBackComponent},
  {path: 'addarticle', component: AddarticleBackComponent},
  {path: 'articles', component: ListarticlesFrontComponent},
  {path: 'followingarticles', component: FollowingarticlesFrontComponent},
  {path: 'Articlesnav', component: ArticlesNavComponent},
  {path: 'article/:id', component: ArticledetailsFrontComponent},
  {path: 'articledetails/:id' , component: ArticledetailsBackComponent},
  {path: 'profanity', component: ProfanityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
