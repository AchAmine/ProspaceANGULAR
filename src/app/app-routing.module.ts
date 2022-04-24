import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';
import { AddquizBackComponent } from './back/quiz/addquiz-back/addquiz-back.component';
import { AddquizanswerBackComponent } from './back/quiz/addquizanswer-back/addquizanswer-back.component';
import { AddquizquestionBackComponent } from './back/quiz/addquizquestion-back/addquizquestion-back.component';
import { ListQuizAnswerBackComponent } from './back/quiz/list-quiz-answer-back/list-quiz-answer-back.component';
import { ListQuizQuestionsBackComponent } from './back/quiz/list-quiz-questions-back/list-quiz-questions-back.component';
import { ListquizBackComponent } from './back/quiz/listquiz-back/listquiz-back.component';
import { UpdateQuizAnswerBackComponent } from './back/quiz/update-quiz-answer-back/update-quiz-answer-back.component';
import { UpdateQuizQuestionBackComponent } from './back/quiz/update-quiz-question-back/update-quiz-question-back.component';
import { UpdatequizBackComponent } from './back/quiz/updatequiz-back/updatequiz-back.component';

const routes: Routes = [
  {path: 'listarticles', component: ListarticlesBackComponent},
  {path: 'addarticle', component: AddarticleBackComponent},
  {path: 'listquiz', component: ListquizBackComponent},
  {path: 'addquiz', component: AddquizBackComponent},
  {path: 'editquiz/:id', component: UpdatequizBackComponent},
  {path: 'quizquestions/:id', component: ListQuizQuestionsBackComponent},
  {path: 'addquizquestions/:id', component: AddquizquestionBackComponent},
  {path: 'quizquestionAnswers/:id', component: ListQuizAnswerBackComponent},
  {path: 'addquizquestionAnswers/:id', component: AddquizanswerBackComponent},
  {path: 'editquizanswer/:id', component: UpdateQuizAnswerBackComponent},
  {path: 'editquizquestion/:id', component: UpdateQuizQuestionBackComponent}




  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
