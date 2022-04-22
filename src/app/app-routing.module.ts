import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddarticleBackComponent } from './back/news/addarticle-back/addarticle-back.component';
import { ListarticlesBackComponent } from './back/news/listarticles-back/listarticles-back.component';

const routes: Routes = [
  {path: 'listarticles', component: ListarticlesBackComponent},
  {path: 'addarticle', component: AddarticleBackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
