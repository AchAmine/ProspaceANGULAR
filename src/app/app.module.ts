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
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgChartsModule } from 'ng2-charts';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FrontmenuComponent } from './common/front/frontmenu/frontmenu.component';
import { RequestInterceptorService } from './service/request-interceptor.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OffersNavComponent } from './front/offer/offers-nav/offers-nav.component';


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
    OffersNavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PickerModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    
    MatCardModule,
    NgbModule,
    MatProgressSpinnerModule,
    NgxCaptchaModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
   
    NgxPaginationModule,
    NgChartsModule
    
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
