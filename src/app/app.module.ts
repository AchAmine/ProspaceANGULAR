import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontindexComponent } from './common/front/frontindex/frontindex.component';
import { FrontNavbarComponent } from './common/front/front-navbar/front-navbar.component';
import { FrontFooterComponent } from './common/front/front-footer/front-footer.component';
import { BackindexComponent } from './common/back/backindex/backindex.component';
import { BackFooterComponent } from './common/back/back-footer/back-footer.component';
import { BackNavbarComponent } from './common/back/back-navbar/back-navbar.component';
import { BackSidebarComponent } from './common/back/back-sidebar/back-sidebar.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ListoffersBackComponent } from './back/offer/listoffers-back/listoffers-back.component';
import { ListarticlesFrontComponent } from './front/news/listarticles-front/listarticles-front.component';
import { ListoffersFrontComponent } from './front/offer/listoffers-front/listoffers-front.component';
import { UpdateoffersBackComponent } from './back/offer/updateoffers-back/updateoffers-back.component';
import { UpdatequizBackComponent } from './back/quiz/updatequiz-back/updatequiz-back.component';
import { AddquizBackComponent } from './back/quiz/addquiz-back/addquiz-back.component';
import { ListquizBackComponent } from './back/quiz/listquiz-back/listquiz-back.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddquizquestionBackComponent } from './back/quiz/addquizquestion-back/addquizquestion-back.component';
import { ListQuizQuestionsBackComponent } from './back/quiz/list-quiz-questions-back/list-quiz-questions-back.component';
import { AddquizanswerBackComponent } from './back/quiz/addquizanswer-back/addquizanswer-back.component';
import { ListQuizAnswerBackComponent } from './back/quiz/list-quiz-answer-back/list-quiz-answer-back.component';
import { UpdateQuizAnswerBackComponent } from './back/quiz/update-quiz-answer-back/update-quiz-answer-back.component';
import { UpdateQuizQuestionBackComponent } from './back/quiz/update-quiz-question-back/update-quiz-question-back.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontindexComponent,
    FrontNavbarComponent,
    FrontFooterComponent,
    BackindexComponent,
    BackFooterComponent,
    BackNavbarComponent,
    BackSidebarComponent,
    ListarticlesBackComponent,
    AddarticleBackComponent,
    ListoffersBackComponent,
    ListarticlesFrontComponent,
    ListoffersFrontComponent,
    UpdateoffersBackComponent,
    UpdatequizBackComponent,
    AddquizBackComponent,
    ListquizBackComponent,
    AddquizquestionBackComponent,
    ListQuizQuestionsBackComponent,
    AddquizanswerBackComponent,
    ListQuizAnswerBackComponent,
    UpdateQuizAnswerBackComponent,
    UpdateQuizQuestionBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
