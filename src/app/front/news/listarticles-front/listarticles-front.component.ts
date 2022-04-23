import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-listarticles-front',
  templateUrl: './listarticles-front.component.html',
  styleUrls: ['./listarticles-front.component.css']
})
export class ListarticlesFrontComponent implements OnInit {

  listArticles: any;
  article :  Article=new Article();
  form: boolean=false;
  date: any;

  articles: Observable<Article[]>
  constructor(private articleService :ArticleService, private router: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllArticles();
    this.date = this.datepipe.transform(this.article.createdAt, 'yyyy-MM-dd');
  }
  getAllArticles(){
    this.articleService.getAllArticles().subscribe((res: any)=> { this.listArticles=res; console.log(res);})
  }
  
  articleDetails(id: number){
    this.router.navigate(['article', id]);
  }

  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
  }
}
