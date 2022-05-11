import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontindexComponent } from 'src/app/common/front/frontindex/frontindex.component';
import { ChatComponent } from '../chat/chat.component';
import { ContactListComponent } from '../chat/contact-list/contact-list.component';
import { ConversationComponent } from '../chat/conversation/conversation.component';
import { ArticledetailsFrontComponent } from '../news/articledetails-front/articledetails-front.component';
import { ArticlesNavComponent } from '../news/articles-nav/articles-nav.component';
import { FollowingarticlesFrontComponent } from '../news/followingarticles-front/followingarticles-front.component';
import { FormationComponent } from '../user/formation/formation.component';
import { SigninPageComponent } from '../user/signin-page/signin-page.component';

const routes: Routes = [
  
  {path:'', component: FrontindexComponent},
  
  {path: 'article/:id', component: ArticledetailsFrontComponent},
  {path: 'chat/:user', component: ChatComponent},
  {path: 'conversation/:user', component: ConversationComponent},
  {path: 'contact', component: ContactListComponent},
  {path: 'formation',component:FormationComponent},
  //{path: 'articles', component: ListarticlesFrontComponent},
  {path: 'articles', component: ArticlesNavComponent},
  {path: 'followingarticles', component: FollowingarticlesFrontComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
