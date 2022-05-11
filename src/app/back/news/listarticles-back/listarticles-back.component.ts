import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/Article';
import { ArticleService } from 'src/app/service/article.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listarticles-back',
  templateUrl: './listarticles-back.component.html',
  styleUrls: ['./listarticles-back.component.css']
})
export class ListarticlesBackComponent implements OnInit {

  listArticles?: any;
  article :  Article=new Article();
  form: boolean=false;
  date: any;

  articles: Observable<Article[]>
  constructor(private articleService :ArticleService, private userService: UserService,private router: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllArticles();;
    console.log(this.listArticles);
  }
  getAllArticles(){
    this.articleService.getAllArticles().subscribe(res=> { this.listArticles=res; console.log(res);})
  }
 
  deleteArticle(idArticle : any){
    if (window.confirm('Are sure you want to delete this Article ?')) {
    this.articleService.deleteArticle(idArticle).subscribe(() => {this.getAllArticles();
    console.log("DELETE ID:",idArticle);}
    )
    }
  }

  editArticle(article: any){
    this.router.navigate(['dashboard/editarticle', article]);
  }

  articleDetails(id: number){
    this.router.navigate(['dashboard/articledetails', id]);
  }

  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
   }

   

}
