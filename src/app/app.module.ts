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
import { DatePipe } from '@angular/common';
import { UpdatearticleBackComponent } from './back/news/updatearticle-back/updatearticle-back.component';
import { ArticledetailsBackComponent } from './back/news/articledetails-back/articledetails-back.component';

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
    ArticledetailsFrontComponent,
    UpdatearticleBackComponent,
    ArticledetailsBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
