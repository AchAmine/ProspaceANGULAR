import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-articlesuggestions-front',
  templateUrl: './articlesuggestions-front.component.html',
  styleUrls: ['./articlesuggestions-front.component.css']
})
export class ArticlesuggestionsFrontComponent implements OnInit {

  idUser = 1;
  article: any;
  recommendedArticles:any;
  followingArticles:any;

  constructor(private articleService :ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.getRecommendedArticles();
  }
  getRecommendedArticles(){
    this.articleService.getuserPreferences(this.idUser).subscribe((res: any)=> {
       this.recommendedArticles=res;
        console.log(res);
      })
  }

 

}
