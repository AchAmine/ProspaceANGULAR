import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-articlesuggestions-front',
  templateUrl: './articlesuggestions-front.component.html',
  styleUrls: ['./articlesuggestions-front.component.css']
})
export class ArticlesuggestionsFrontComponent implements OnInit {

  user: any;
  article: any;
  recommendedArticles:any;
  followingArticles:any;

  constructor(private articleService :ArticleService,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getConnectedUser().subscribe(data => this.user = data)
    this.getRecommendedArticles();
  }
  getRecommendedArticles(){
    this.articleService.getuserPreferences(this.user.idUser).subscribe((res: any)=> {
       this.recommendedArticles=res;
        console.log(res);
      })
  }

 

}
