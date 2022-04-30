import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ArticledetailsBackComponent } from './back/news/articledetails-back/articledetails-back.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';
import { UpdatearticleBackComponent } from './back/news/updatearticle-back/updatearticle-back.component';
import { FrontindexComponent } from './common/front/frontindex/frontindex.component';
import { ArticledetailsFrontComponent } from './front/news/articledetails-front/articledetails-front.component';
import { ListarticlesFrontComponent } from './front/news/listarticles-front/listarticles-front.component';
import { AddquizBackComponent } from './back/quiz/addquiz-back/addquiz-back.component';
import { AddquizanswerBackComponent } from './back/quiz/addquizanswer-back/addquizanswer-back.component';
import { AddquizquestionBackComponent } from './back/quiz/addquizquestion-back/addquizquestion-back.component';
import { ListQuizAnswerBackComponent } from './back/quiz/list-quiz-answer-back/list-quiz-answer-back.component';
import { ListQuizQuestionsBackComponent } from './back/quiz/list-quiz-questions-back/list-quiz-questions-back.component';
import { ListquizBackComponent } from './back/quiz/listquiz-back/listquiz-back.component';
import { UpdateQuizAnswerBackComponent } from './back/quiz/update-quiz-answer-back/update-quiz-answer-back.component';
import { UpdateQuizQuestionBackComponent } from './back/quiz/update-quiz-question-back/update-quiz-question-back.component';
import { UpdatequizBackComponent } from './back/quiz/updatequiz-back/updatequiz-back.component';
import { QuizpageFrontComponent } from './front/quiz/quizpage-front/quizpage-front.component';
import { StartQuizFrontComponent } from './front/quiz/start-quiz-front/start-quiz-front.component';
import { ResultQuizFrontComponent } from './front/quiz/result-quiz-front/result-quiz-front.component';
import { ListoffersBackComponent } from './back/offer/listoffers-back/listoffers-back.component';
import { UpdateoffersBackComponent } from './back/offer/updateoffers-back/updateoffers-back.component';
import { ListoffersFrontComponent } from './front/offer/listoffers-front/listoffers-front.component';
import { SendofferFrontComponent } from './front/offer/sendoffer-front/sendoffer-front.component';
import { OfferdetailsBackComponent } from './back/offer/offerdetails-back/offerdetails-back.component';
import { UploadFileComponent } from './front/offer/sendoffer-front/upload-file/upload-file.component';


const routes: Routes = [
  {path:'home', component: FrontindexComponent},
  {path: 'listarticles', component: ListarticlesBackComponent},
  {path: 'addarticle', component: AddarticleBackComponent},
  {path: 'articles', component: ListarticlesFrontComponent},
  {path: 'article/:id', component: ArticledetailsFrontComponent},
  {path: 'editarticle/:id', component: UpdatearticleBackComponent},
  {path: 'articledetails/:id' , component: ArticledetailsBackComponent},
  {path: 'listquiz', component: ListquizBackComponent},
  {path: 'addquiz', component: AddquizBackComponent},
  {path: 'editquiz/:id', component: UpdatequizBackComponent},
  {path: 'quizquestions/:id', component: ListQuizQuestionsBackComponent},
  {path: 'addquizquestions/:id', component: AddquizquestionBackComponent},
  {path: 'quizquestionAnswers/:id', component: ListQuizAnswerBackComponent},
  {path: 'addquizquestionAnswers/:id', component: AddquizanswerBackComponent},
  {path: 'editquizanswer/:id', component: UpdateQuizAnswerBackComponent},
  {path: 'editquizquestion/:id', component: UpdateQuizQuestionBackComponent},
  {path: 'quizpageFront', component: QuizpageFrontComponent},
  {path: 'startQuiz/:id', component: StartQuizFrontComponent},
  {path: 'resultQuiz/:id', component: ResultQuizFrontComponent },
  {path: 'listoffersBack', component: ListoffersBackComponent },
  //{path: 'offerDetails/:id', component: UpdateoffersBackComponent },
  {path: 'offerDetails/:id', component: OfferdetailsBackComponent },
  {path: 'listoffersFront', component: ListoffersFrontComponent },
  {path: 'sendOfferFront', component: SendofferFrontComponent },
  {path: 'uploadOfferFile', component: UploadFileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
