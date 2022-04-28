import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-followingarticles-front',
  templateUrl: './followingarticles-front.component.html',
  styleUrls: ['./followingarticles-front.component.css']
})
export class FollowingarticlesFrontComponent implements OnInit {

  idUser = 1;
  article: any;
  followingArticles:any;
  date:any;

  constructor(private articleService :ArticleService, private router: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    
    this.getFollowingArticles();
  }

  getFollowingArticles(){
    this.articleService.getFollowingArticles(this.idUser).subscribe((res: any)=> {
       this.followingArticles=res;
        console.log(res);
      })
  }

  articleDetails(id: number){
    this.router.navigate(['article', id]);
  }

  convertDate(date: any){
    return this.date = this.datepipe.transform(date, 'yyyy-MM-dd HH:mm');
  }
}
