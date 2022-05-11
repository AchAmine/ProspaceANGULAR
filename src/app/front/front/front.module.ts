import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarticlesFrontComponent } from '../news/listarticles-front/listarticles-front.component';
import { ListoffersFrontComponent } from '../offer/listoffers-front/listoffers-front.component';
import { ArticledetailsFrontComponent } from '../news/articledetails-front/articledetails-front.component';
import { ArticlereactionsFrontComponent } from '../news/articlereactions-front/articlereactions-front.component';
import { EditarticlecommentFrontComponent } from '../news/editarticlecomment-front/editarticlecomment-front.component';
import { ArticlesuggestionsFrontComponent } from '../news/articlesuggestions-front/articlesuggestions-front.component';
import { FollowingarticlesFrontComponent } from '../news/followingarticles-front/followingarticles-front.component';
import { ArticlesNavComponent } from '../news/articles-nav/articles-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ChatComponent } from '../chat/chat.component';
import { ConversationComponent } from '../chat/conversation/conversation.component';
import { SigninPageComponent } from '../user/signin-page/signin-page.component';
import { SignupPageComponent } from '../user/signup-page/signup-page.component';
import { ResetComponent } from '../user/reset/reset.component';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgChartsModule } from 'ng2-charts';
import { StartQuizFrontComponent } from '../quiz/start-quiz-front/start-quiz-front.component';
import { ResultQuizFrontComponent } from '../quiz/result-quiz-front/result-quiz-front.component';
import { SendofferFrontComponent } from '../offer/sendoffer-front/sendoffer-front.component';
import { OfferdetailsFrontComponent } from '../offer/offerdetails-front/offerdetails-front.component';
import { UploadFileComponent } from '../offer/sendoffer-front/upload-file/upload-file.component';
import { OfferFilterPipe } from '../offer/listoffers-front/offer-filter.pipe';
import { ShowResultQuizFrontComponent } from '../quiz/show-result-quiz-front/show-result-quiz-front.component';
import { QuizpageFrontComponent } from '../quiz/quizpage-front/quizpage-front.component';
import { FrontRoutingModule } from './front-routing.module';


@NgModule({
  declarations: [
    ListarticlesFrontComponent,
    ListoffersFrontComponent,
    ArticledetailsFrontComponent,
    ArticlereactionsFrontComponent,
    EditarticlecommentFrontComponent,
    ArticlesuggestionsFrontComponent,
    FollowingarticlesFrontComponent,
    ArticlesNavComponent,
    ChatComponent,
    ConversationComponent,
    SigninPageComponent,
    SignupPageComponent,
    ResetComponent,
    ListoffersFrontComponent,
    StartQuizFrontComponent,
    QuizpageFrontComponent,
    ResultQuizFrontComponent,
    ShowResultQuizFrontComponent,
    StartQuizFrontComponent,
    SendofferFrontComponent,
    OfferdetailsFrontComponent,
    UploadFileComponent,
    OfferFilterPipe
  ],
  imports: [
    CommonModule,
    FrontRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    PickerModule,
    MatCardModule,
    NgbModule,
    MatProgressSpinnerModule,
    NgxCaptchaModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
   
    NgxPaginationModule,
    NgChartsModule,
  ]
})
export class FrontModule { }
