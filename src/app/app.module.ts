import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontindexComponent } from './common/front/frontindex/frontindex.component';
import { FrontNavbarComponent } from './common/front/front-navbar/front-navbar.component';
import { FrontFooterComponent } from './common/front/front-footer/front-footer.component';
import { BackindexComponent } from './common/back/backindex/backindex.component';
import { BackFooterComponent } from './common/back/back-footer/back-footer.component';
import { BackNavbarComponent } from './common/back/back-navbar/back-navbar.component';
import { BackSidebarComponent } from './common/back/back-sidebar/back-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticledetailsFrontComponent } from './front/news/articledetails-front/articledetails-front.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UpdatearticleBackComponent } from './back/news/updatearticle-back/updatearticle-back.component';
import { ArticledetailsBackComponent } from './back/news/articledetails-back/articledetails-back.component';
import { UpdatequizBackComponent } from './back/quiz/updatequiz-back/updatequiz-back.component';
import { AddquizBackComponent } from './back/quiz/addquiz-back/addquiz-back.component';
import { ListquizBackComponent } from './back/quiz/listquiz-back/listquiz-back.component';
import { AddquizquestionBackComponent } from './back/quiz/addquizquestion-back/addquizquestion-back.component';
import { ListQuizQuestionsBackComponent } from './back/quiz/list-quiz-questions-back/list-quiz-questions-back.component';
import { AddquizanswerBackComponent } from './back/quiz/addquizanswer-back/addquizanswer-back.component';
import { ListQuizAnswerBackComponent } from './back/quiz/list-quiz-answer-back/list-quiz-answer-back.component';
import { UpdateQuizAnswerBackComponent } from './back/quiz/update-quiz-answer-back/update-quiz-answer-back.component';
import { UpdateQuizQuestionBackComponent } from './back/quiz/update-quiz-question-back/update-quiz-question-back.component';
import { UpdateoffersBackComponent } from './back/offer/updateoffers-back/updateoffers-back.component';
import { QuizpageFrontComponent } from './front/quiz/quizpage-front/quizpage-front.component';
import { StartQuizFrontComponent } from './front/quiz/start-quiz-front/start-quiz-front.component';
import { ResultQuizFrontComponent } from './front/quiz/result-quiz-front/result-quiz-front.component';
import { MatCardModule } from '@angular/material/card';
import { SendofferFrontComponent } from './front/offer/sendoffer-front/sendoffer-front.component';
import { OfferdetailsBackComponent } from './back/offer/offerdetails-back/offerdetails-back.component';
import { UploadFileComponent } from './front/offer/sendoffer-front/upload-file/upload-file.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferdetailsFrontComponent } from './front/offer/offerdetails-front/offerdetails-front.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { OfferFilterPipe } from './front/offer/listoffers-front/offer-filter.pipe';
import { OffersStatsComponent } from './back/offer/offers-stats/offers-stats.component';
import { NgChartsModule } from 'ng2-charts';
import { ShowResultQuizFrontComponent } from './front/quiz/show-result-quiz-front/show-result-quiz-front.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FrontmenuComponent } from './common/front/frontmenu/frontmenu.component';
import { RequestInterceptorService } from './service/request-interceptor.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    FrontmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    NgbModule,
    MatProgressSpinnerModule,
    NgxCaptchaModule,
    CommonModule,
    NgbModalModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
   
    NgxPaginationModule,
    NgChartsModule
    PickerModule,
    MatSnackBarModule,
    BrowserAnimationsModule
    
  ],
  providers: [DatePipe,{provide: LocationStrategy,useClass:HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
