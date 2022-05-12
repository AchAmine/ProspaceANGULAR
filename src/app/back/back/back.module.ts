import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { ListarticlesBackComponent } from '../news/listarticles-back/listarticles-back.component';
import { AddarticleBackComponent } from '../news/addarticle-back/addarticle-back.component';
import { UpdatearticleBackComponent } from '../news/updatearticle-back/updatearticle-back.component';
import { ListoffersBackComponent } from '../offer/listoffers-back/listoffers-back.component';
import { ArticledetailsBackComponent } from '../news/articledetails-back/articledetails-back.component';
import { ProfanityComponent } from '../news/profanity/profanity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ArticlesBackComponent } from '../news/articles-back/articles-back.component';
import { AddquizBackComponent } from '../quiz/addquiz-back/addquiz-back.component';
import { AddquizanswerBackComponent } from '../quiz/addquizanswer-back/addquizanswer-back.component';
import { UpdatequizBackComponent } from '../quiz/updatequiz-back/updatequiz-back.component';
import { UpdateQuizQuestionBackComponent } from '../quiz/update-quiz-question-back/update-quiz-question-back.component';
import { UpdateQuizAnswerBackComponent } from '../quiz/update-quiz-answer-back/update-quiz-answer-back.component';
import { AddquizquestionBackComponent } from '../quiz/addquizquestion-back/addquizquestion-back.component';
import { ListQuizAnswerBackComponent } from '../quiz/list-quiz-answer-back/list-quiz-answer-back.component';
import { ListQuizQuestionsBackComponent } from '../quiz/list-quiz-questions-back/list-quiz-questions-back.component';
import { ListquizBackComponent } from '../quiz/listquiz-back/listquiz-back.component';
import { OfferdetailsBackComponent } from '../offer/offerdetails-back/offerdetails-back.component';



@NgModule({
  declarations: [
    ListarticlesBackComponent,
    AddarticleBackComponent,
    ListoffersBackComponent,
    UpdatearticleBackComponent,
    ArticledetailsBackComponent,
    ProfanityComponent,
    ArticlesBackComponent,
    AddquizBackComponent,
    AddquizanswerBackComponent, 
    UpdatequizBackComponent,
    UpdateQuizQuestionBackComponent,
    UpdateQuizAnswerBackComponent,
    AddquizquestionBackComponent,
    ListQuizAnswerBackComponent,
    ListQuizQuestionsBackComponent,
    ListquizBackComponent  ,
    OfferdetailsBackComponent
    
  ],
  imports: [
    CommonModule,
    BackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule,
    
  ]
})
export class BackModule { }
