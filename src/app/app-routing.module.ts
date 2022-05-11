import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSectionBackComponent } from './back/forum/add-section-back/add-section-back.component';
import { ListSectionsBackComponent } from './back/forum/list-sections-back/list-sections-back.component';
import { UpdateSectionBackComponent } from './back/forum/update-section-back/update-section-back.component';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ArticledetailsBackComponent } from './back/news/articledetails-back/articledetails-back.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';
import { UpdatearticleBackComponent } from './back/news/updatearticle-back/updatearticle-back.component';
import { FrontindexComponent } from './common/front/frontindex/frontindex.component';
import { AddTopicFrontComponent } from './front/forum/add-topic-front/add-topic-front.component';
import { CommentsFrontComponent } from './front/forum/comments-front/comments-front.component';
import { ListSectionsFrontComponent } from './front/forum/list-sections-front/list-sections-front.component';
import { ListTopicsFrontComponent } from './front/forum/list-topics-front/list-topics-front.component';
import { SectionDetailsComponent } from './front/forum/section-details/section-details.component';
import { TopicDetailsFrontComponent } from './front/forum/topic-details-front/topic-details-front.component';
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
  {path: 'editSection/:id', component: UpdateSectionBackComponent},

  {path: 'listSections', component: ListSectionsBackComponent}, 
  {path: 'addSection', component: AddSectionBackComponent},
  {path: 'listSectionsFront', component: ListSectionsFrontComponent}, 
  {path:'addTopic',component:AddTopicFrontComponent},
  {path: 'listTopicsFront/ :id',component:ListTopicsFrontComponent},
  {path:'section/:id',component:SectionDetailsComponent},
  {path:'topic/:id',component:TopicDetailsFrontComponent},
  {path:'post/:id',component:CommentsFrontComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
