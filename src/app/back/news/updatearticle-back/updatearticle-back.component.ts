import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/model/Article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-updatearticle-back',
  templateUrl: './updatearticle-back.component.html',
  styleUrls: ['./updatearticle-back.component.css']
})
export class UpdatearticleBackComponent implements OnInit {

  artic: any;
  id: number;
  article: Article = new Article();
  form: FormGroup;
  constructor(private articleService: ArticleService,private router: Router,private route: ActivatedRoute,public fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('test');
    
   this.route.paramMap.subscribe(res=>{this.id=Number(res.get('id')),this.articleService.getArticle(this.id).subscribe(data => {this.artic = data
     this.article=data; 
    })});

    this.form = this.fb.group({
      article: [''],
      file: [null],
    });
  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file')?.setValue(file);
    }
  }

  editArticle(article: any) {
    console.log(article);
    const formData = new FormData();
    formData.append('file', this.form.get('file')?.value);
    article.idArticle = this.route.snapshot.params['id'];
    formData.append('article', JSON.stringify(article));

    this.articleService.editArticle(formData).subscribe();

    
  }

  Cancel() {
    this.router.navigate(['listarticles']);
  }

}
