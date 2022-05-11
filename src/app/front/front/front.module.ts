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

import { AddcomplaintFrontComponent } from "src/app/front/complaint/addcomplaint-front/addcomplaint-front.component";


import { SigninPageComponent } from '../user/signin-page/signin-page.component';
import { SignupPageComponent } from '../user/signup-page/signup-page.component';
import { ResetComponent } from '../user/reset/reset.component';



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
    ResetComponent

  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule
  ]
})
export class FrontModule { }
