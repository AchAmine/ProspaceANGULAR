import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSectionBackComponent } from './back/forum/add-section-back/add-section-back.component';
import { ListSectionsBackComponent } from './back/forum/list-sections-back/list-sections-back.component';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ArticledetailsBackComponent } from './back/news/articledetails-back/articledetails-back.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';
import { UpdatearticleBackComponent } from './back/news/updatearticle-back/updatearticle-back.component';
import { FrontindexComponent } from './common/front/frontindex/frontindex.component';
import { ArticledetailsFrontComponent } from './front/news/articledetails-front/articledetails-front.component';
import { ListarticlesFrontComponent } from './front/news/listarticles-front/listarticles-front.component';

const routes: Routes = [
  {path:'home', component: FrontindexComponent},
  {path: 'listarticles', component: ListarticlesBackComponent},
  {path: 'addarticle', component: AddarticleBackComponent},
  {path: 'articles', component: ListarticlesFrontComponent},
  {path: 'article/:id', component: ArticledetailsFrontComponent},
  {path: 'editarticle/:id', component: UpdatearticleBackComponent},
  {path: 'articledetails/:id' , component: ArticledetailsBackComponent},

  {path: 'listSections', component: ListSectionsBackComponent},
  {path: 'addSection', component: AddSectionBackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
