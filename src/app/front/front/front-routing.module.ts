import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontindexComponent } from 'src/app/common/front/frontindex/frontindex.component';
import { ChatComponent } from '../chat/chat.component';
import { ContactListComponent } from '../chat/contact-list/contact-list.component';
import { ConversationComponent } from '../chat/conversation/conversation.component';
import { ArticledetailsFrontComponent } from '../news/articledetails-front/articledetails-front.component';
import { ArticlesNavComponent } from '../news/articles-nav/articles-nav.component';
import { FollowingarticlesFrontComponent } from '../news/followingarticles-front/followingarticles-front.component';
import { ListoffersFrontComponent } from '../offer/listoffers-front/listoffers-front.component';
import { OfferdetailsFrontComponent } from '../offer/offerdetails-front/offerdetails-front.component';
import { SendofferFrontComponent } from '../offer/sendoffer-front/sendoffer-front.component';
import { UploadFileComponent } from '../offer/sendoffer-front/upload-file/upload-file.component';
import { QuizpageFrontComponent } from '../quiz/quizpage-front/quizpage-front.component';
import { ResultQuizFrontComponent } from '../quiz/result-quiz-front/result-quiz-front.component';
import { ShowResultQuizFrontComponent } from '../quiz/show-result-quiz-front/show-result-quiz-front.component';
import { StartQuizFrontComponent } from '../quiz/start-quiz-front/start-quiz-front.component';


const routes: Routes = [
  
  {path:'', component: FrontindexComponent},
  
  {path: 'article/:id', component: ArticledetailsFrontComponent},
  {path: 'chat/:user', component: ChatComponent},
  {path: 'conversation/:user', component: ConversationComponent},
  {path: 'contact', component: ContactListComponent},
  //{path: 'articles', component: ListarticlesFrontComponent},
  {path: 'articles', component: ArticlesNavComponent},
  {path: 'followingarticles', component: FollowingarticlesFrontComponent},
  {path: 'listoffersFront', component: ListoffersFrontComponent },
  {path: 'sendOfferFront', component: SendofferFrontComponent },
  {path: 'uploadOfferFile', component: UploadFileComponent},
  {path: 'resultQuiz/:idQuiz', component: ResultQuizFrontComponent},
  {path: 'offerDetailsFront/:id', component: OfferdetailsFrontComponent},
  {path: 'quizpageFront', component: QuizpageFrontComponent},
  {path: 'startQuiz/:id', component: StartQuizFrontComponent},
  {path: 'resultQuiz/:id', component: ResultQuizFrontComponent },
  {path: 'ShowresultQuiz/:id', component: ShowResultQuizFrontComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
