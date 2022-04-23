import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';
import { ArticledetailsFrontComponent } from './front/news/articledetails-front/articledetails-front.component';
import { ListarticlesFrontComponent } from './front/news/listarticles-front/listarticles-front.component';

const routes: Routes = [
  {path: 'listarticles', component: ListarticlesBackComponent},
  {path: 'addarticle', component: AddarticleBackComponent},
  {path: 'articles', component: ListarticlesFrontComponent},
  {path: 'article/:id', component: ArticledetailsFrontComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
