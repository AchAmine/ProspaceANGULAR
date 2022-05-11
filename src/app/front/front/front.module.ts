import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
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
import { ProfileComponent } from '../user/profile/profile.component';
import { FormationComponent } from '../user/formation/formation.component';
import { AllformationComponent } from '../user/allformation/allformation.component';
import { MyformationComponent } from '../user/myformation/myformation.component';
import { NewBadgeComponent } from '../user/new-badge/new-badge.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { FullCalenderComponent } from '../user/full-calender/full-calender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

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
    ProfileComponent,
    FormationComponent,
    AllformationComponent,
    MyformationComponent,
    NewBadgeComponent,
    FullCalenderComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule,
    FullCalendarModule,
    
    
  ]
})
export class FrontModule { }
