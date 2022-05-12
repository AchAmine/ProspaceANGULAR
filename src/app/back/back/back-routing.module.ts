import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListoffersFrontComponent } from 'src/app/front/offer/listoffers-front/listoffers-front.component';
import { AddarticleBackComponent } from '../news/addarticle-back/addarticle-back.component';
import { ArticledetailsBackComponent } from '../news/articledetails-back/articledetails-back.component';
import { ArticlesBackComponent } from '../news/articles-back/articles-back.component';
import { ListarticlesBackComponent } from '../news/listarticles-back/listarticles-back.component';
import { ProfanityComponent } from '../news/profanity/profanity.component';
import { UpdatearticleBackComponent } from '../news/updatearticle-back/updatearticle-back.component';
import { ListoffersBackComponent } from '../offer/listoffers-back/listoffers-back.component';
import { OfferdetailsBackComponent } from '../offer/offerdetails-back/offerdetails-back.component';
import { AddquizBackComponent } from '../quiz/addquiz-back/addquiz-back.component';
import { AddquizanswerBackComponent } from '../quiz/addquizanswer-back/addquizanswer-back.component';
import { AddquizquestionBackComponent } from '../quiz/addquizquestion-back/addquizquestion-back.component';
import { ListQuizAnswerBackComponent } from '../quiz/list-quiz-answer-back/list-quiz-answer-back.component';
import { ListQuizQuestionsBackComponent } from '../quiz/list-quiz-questions-back/list-quiz-questions-back.component';
import { ListquizBackComponent } from '../quiz/listquiz-back/listquiz-back.component';
import { UpdateQuizAnswerBackComponent } from '../quiz/update-quiz-answer-back/update-quiz-answer-back.component';
import { UpdateQuizQuestionBackComponent } from '../quiz/update-quiz-question-back/update-quiz-question-back.component';
import { UpdatequizBackComponent } from '../quiz/updatequiz-back/updatequiz-back.component';

const routes: Routes = [
  
  {path: 'editarticle/:id', component: UpdatearticleBackComponent},
  {path: 'listarticles', component: ListarticlesBackComponent},
  {path: 'addarticle', component: AddarticleBackComponent},
  {path: 'profanity', component: ProfanityComponent},
  {path: 'articledetails/:id' , component: ArticledetailsBackComponent},
  {path: 'articles' , component: ArticlesBackComponent},
 
  {path: 'editquiz/:id', component: UpdatequizBackComponent},
  {path: 'quizquestions/:id', component: ListQuizQuestionsBackComponent},
  {path: 'addquizquestions/:id', component: AddquizquestionBackComponent},
  {path: 'quizquestionAnswers/:id', component: ListQuizAnswerBackComponent},
  {path: 'addquizquestionAnswers/:id', component: AddquizanswerBackComponent},
  {path: 'editquizanswer/:id', component: UpdateQuizAnswerBackComponent},
  {path: 'editquizquestion/:id', component: UpdateQuizQuestionBackComponent},
  {path: 'listquiz', component: ListquizBackComponent},
  {path: 'addquiz', component: AddquizBackComponent},
  {path: 'offerDetailsBack/:id', component: OfferdetailsBackComponent },
  {path: 'listoffersFront', component: ListoffersFrontComponent },
  {path: 'listoffersBack', component: ListoffersBackComponent },
  {path: 'offerDetailsBack', component: OfferdetailsBackComponent }

  











];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }
