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


@NgModule({
  declarations: [
    ListarticlesBackComponent,
    AddarticleBackComponent,
    ListoffersBackComponent,
    UpdatearticleBackComponent,
    ArticledetailsBackComponent,
    ProfanityComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule
  ]
})
export class BackModule { }
