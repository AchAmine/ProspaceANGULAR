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
import { RequestInterceptorService } from './service/request-interceptor.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetComponent } from './front/user/reset/reset.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserManagmentComponent } from './back/user/user-managment/user-managment.component';
import { FormationManagmentComponent } from './back/user/formation-managment/formation-managment.component';
import { AddFormationComponent } from './back/user/add-formation/add-formation.component';
import { FullCalenderComponent } from './front/user/full-calender/full-calender.component';





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
    PickerModule,
    MatSnackBarModule,
    MatDialogModule,
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
