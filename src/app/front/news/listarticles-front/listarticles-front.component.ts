import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleType } from 'src/app/enum/ArticleType.enum';
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
  //retrieve img
  image:any;
  retrieveimg:any;
  path:any;
  base64Data:any;
  // categorie des articles
  categories = ['News','Jokes','Tips','Facts','WellBeing'];
  articleCount: any;
  url:any;

  articles: Observable<Article[]>
  constructor(public articleService :ArticleService, private router: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllArticles();
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

  /* viewsInc(article: Article){
    article.views++;
    console.log("views b4 service call",article);
    this.articleService.editArticle(article).subscribe(
      (res: any)=> { this.listArticles=res; console.log("article views : ",res.views) ;
      console.log("article  : ",res)
      }
    );
  } */

  articleCountPerType(val:any){
    let type = this.categories[val] as ArticleType;
    /* this.reactionService.getArticleReactorsByType(this.idArticle,type).subscribe(data => {

  
      this.reactionCount == data.length
      console.log(this.reactionCount);
      }) */
      this.articleCount= 0;
      for (let article in this.listArticles) {
        if (this.listArticles[article].type == type )
        {
          this.articleCount++;
        }
      }
      console.log("ARTICLE TYPE : ",type,"ARTICLE COUNT",this.articleCount);
      return this.articleCount;
  }

    getImage(path:any){
     return this.articleService.getImage(path).subscribe(
        data => {
         this.image = data;

          console.log("Image : ",this.image);
        }
        
      );
    }
  
}
