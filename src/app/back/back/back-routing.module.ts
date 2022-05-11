import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleBackComponent } from '../news/addarticle-back/addarticle-back.component';
import { ArticledetailsBackComponent } from '../news/articledetails-back/articledetails-back.component';
import { ListarticlesBackComponent } from '../news/listarticles-back/listarticles-back.component';
import { ProfanityComponent } from '../news/profanity/profanity.component';
import { UpdatearticleBackComponent } from '../news/updatearticle-back/updatearticle-back.component';
import { AddFormationComponent } from '../user/add-formation/add-formation.component';
import { FormationManagmentComponent } from '../user/formation-managment/formation-managment.component';
import { UserManagmentComponent } from '../user/user-managment/user-managment.component';

const routes: Routes = [
  
  {path: 'editarticle/:id', component: UpdatearticleBackComponent},
  {path: 'listarticles', component: ListarticlesBackComponent},
  {path: 'addarticle', component: AddarticleBackComponent},
  {path: 'profanity', component: ProfanityComponent},
  {path: 'articledetails/:id' , component: ArticledetailsBackComponent},
  {path:'users' , component:UserManagmentComponent },
  {path:'formations',component:FormationManagmentComponent},
  {path:'addfromation',component:AddFormationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }
