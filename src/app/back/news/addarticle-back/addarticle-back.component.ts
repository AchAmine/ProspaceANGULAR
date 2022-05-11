import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { ArticleService } from 'src/app/service/article.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addarticle-back',
  templateUrl: './addarticle-back.component.html',
  styleUrls: ['./addarticle-back.component.css']
})
export class AddarticleBackComponent implements OnInit {

  article: Article = new Article();
  listArticles?: any;
  form: FormGroup;
  categories : any = [];
  category: any;
  user:any;
  constructor(private articleService: ArticleService,private userService: UserService, private router: Router, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      article: [''],
      file: [null],
    });
    this.categories = ['News','Jokes','Facts'];
    this.userService.getConnectedUser().subscribe(data => this.user = data)
  }
  getCategory(event: any) {
    if (event.target.value != 0) {
     console.log("category",event.target.value);
      this.category = event.target.value;
    } 
  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file')?.setValue(file);
    }
  }

  addArticle(article: any) {
    console.log(article);
    const formData = new FormData();
    article.type = this.category;
    article.user = this.user;
    formData.append('file', this.form.get('file')?.value);
    formData.append('article', JSON.stringify(article));
    this.articleService.addArticle(formData,this.user.idUser).subscribe(
      () => {
        this.router.navigate(['/dashboard/listarticles']);
      }
    );
  }

  getAllArticles(){
    this.articleService.getAllArticles().subscribe(res=> { this.listArticles=res; console.log(res);})
  }

  Cancel() {
    this.router.navigate(['/dashboard/listarticles']);
  }
}
