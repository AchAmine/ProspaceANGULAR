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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticledetailsFrontComponent } from './front/news/articledetails-front/articledetails-front.component';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UpdatearticleBackComponent } from './back/news/updatearticle-back/updatearticle-back.component';
import { ArticledetailsBackComponent } from './back/news/articledetails-back/articledetails-back.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ArticlereactionsFrontComponent } from './front/news/articlereactions-front/articlereactions-front.component';
import { EditarticlecommentFrontComponent } from './front/news/editarticlecomment-front/editarticlecomment-front.component';
import { ArticlesuggestionsFrontComponent } from './front/news/articlesuggestions-front/articlesuggestions-front.component';
import { FollowingarticlesFrontComponent } from './front/news/followingarticles-front/followingarticles-front.component';
import { ArticlesNavComponent } from './front/news/articles-nav/articles-nav.component';
import { ProfanityComponent } from './back/news/profanity/profanity.component';
import { ChatComponent } from './front/chat/chat.component';
import { ContactListComponent } from './front/chat/contact-list/contact-list.component';
import { ConversationComponent } from './front/chat/conversation/conversation.component';
import { FrontmenuComponent } from './common/front/frontmenu/frontmenu.component';
import { AddcomplaintBackComponent } from './back/complaint/addcomplaint-back/addcomplaint-back.component';
import { ListcomplaintBackComponent } from './back/complaint/listcomplaint-back/listcomplaint-back.component';
import { DetailscomplaintBackComponent } from './back/complaint/detailscomplaint-back/detailscomplaint-back.component';
import { AddcomplaintFrontComponent } from './front/complaint/addcomplaint-front/addcomplaint-front.component';
import { DetailscomplaintFrontComponent } from './front/complaint/detailscomplaint-front/detailscomplaint-front.component';


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
    FrontmenuComponent,
    AddcomplaintBackComponent,
    ListcomplaintBackComponent,
    DetailscomplaintBackComponent,
    AddcomplaintFrontComponent,
    DetailscomplaintFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PickerModule
  ],
  providers: [DatePipe,{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
